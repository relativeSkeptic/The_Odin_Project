import "./styles.css";
import { Player } from "./player";
import { Computer } from "./computer";
import { UserInterface } from "./userInterface"

let human = new Player();
let computer = new Computer();
let UI = new UserInterface(human.gameboard.shipsToCoords);
UI.placeShips(computer.gameboard.shipsToCoords, 'computer');
let whosTurn = 'human';
let startFlag = false;

//Buttons
let startButton = document.getElementById('startButton');
startButton.addEventListener('click', startLogic);

let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetLogic);

//Start button logic
function startLogic() {
    startFlag = true; 
    //Determine who the starting player will be
    if(Math.floor(Math.random() * 2) === 1) {
        whosTurn = 'computer';
    }
    if(whosTurn === 'computer') {
        takeTurn('computer');
    }

    // Attach listeners to computer grid
    document.querySelectorAll('[data-owner="computer"]').forEach(cell => {
        cell.addEventListener('click', handleComputerCellClick);
    });

    startButton.removeEventListener('click', startLogic);
    startButton.classList.add('deactivate-game-button');
}

//Reset button logic
function resetLogic() {
    //Reset UI and layout
    human.resetLayout();
    computer.resetLayout();
    UI.resetLayout();

    //Place the ships on the new board
    UI.placeShips(human.gameboard.shipsToCoords);
    UI.placeShips(computer.gameboard.shipsToCoords, 'computer');

    //Reset the start button
    startFlag = false;
    startButton.classList.remove('deactivate-game-button');
    startButton.addEventListener('click', (startLogic));
}

//Logic executed to take a single turn
function takeTurn(player, cell = null) {
    //Ensure start button has been pressed
    if(startFlag === false) {
        return;
    }

    //Only fire a missile on a players turn
    if (player !== whosTurn) {
        return;
    }

    let attack = null;
    if(player === 'human') {
        //Parse out the attack coordinates
        const x = parseInt(cell.getAttribute('data-x'));
        const y = parseInt(cell.getAttribute('data-y'));
        const coordinate = [x, y];
        
        //Pass the coordinates into the player attack function
        attack = human.takeTurn(coordinate, computer.gameboard);
    }
    else {
        //The computer already has a built in attack function and just needs a reference to the gameboard
        attack = computer.takeTurn(human.gameboard);
    }

    let whosBoard = 'human';
    if(player === 'human') {
        whosBoard = 'computer';
    }

    //Switch case to handle the various results that return from the attack method
    switch (attack.result) {
    case "hit":
        //If the attack was a hit update the message board and switch the turn
        UI.updateMessageBoard(attack.message);
        UI.applyMarker(attack.coord, 'hit', whosBoard);
        switchTurn();
        break;

    case "miss":
        //If the attack was a miss update the message board and switch the turn
        UI.updateMessageBoard(attack.message);
        UI.applyMarker(attack.coord, 'miss', whosBoard);
        switchTurn();
        break;

    case "sunk":
        UI.applyMarker(attack.coord, 'hit', whosBoard);
        console.log(attack.ship.name);
        UI.revealShip(attack.ship.name);
        if(attack.hasWon === true) {
            endGame();
        }
        else {
            UI.updateMessageBoard(attack.message);
            UI.revealShip(attack.ship.name);
            switchTurn();
        }
        break;

    default:
        UI.updateMessageBoard(attack.message);
        break;
    }

    //If it is now the computers turn, have it take its turn with a small delay
    if(whosTurn === 'computer') {
        setTimeout(() => {takeTurn('computer');
        }, 100);
    }
}

//Logic that is executed once the game ends
function endGame() {
    //Reveal all computer ship locations
    UI.revealComputerShips();

    //Message to output to player
    let message = 'You win!';
    if(whosTurn === 'computer') {
        message = 'Computer Wins.';
    }

    //Update the message board
    UI.updateMessageBoard(message);

    document.querySelectorAll('[data-owner="computer"]').forEach(cell => {
        cell.removeEventListener('click', handleComputerCellClick);
    });

    //Update the message board prompting the user to restart the game after 10 seconds
    setTimeout(() => {UI.updateMessageBoard('Click "Reset", to start a new game.');
    }, 10000);
}

//Switches the turns between players
function switchTurn() {
    if(whosTurn === 'human') {
        whosTurn = 'computer';
    }
    else {
        whosTurn = 'human';
    }
}

function handleComputerCellClick(event) {
    const cell = event.currentTarget;
    takeTurn('human', cell);
}