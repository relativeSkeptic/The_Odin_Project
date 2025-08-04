import "./styles.css";
import { Player } from "./player";
import { Computer } from "./computer";
import { UserInterface } from "./userInterface"

let human = new Player();
let computer = new Computer();
let UI = new UserInterface(human.gameboard.shipsToCoords);
UI.placeShips(computer.gameboard.shipsToCoords, 'computer');
console.log(human.gameboard.shipsToCoords);

let startFlag = false;
let whosTurn = 'human';

//Start button logic
document.querySelector('#startButton').addEventListener('click', (e) => {
    //Determine who the starting player will be
    if(Math.floor(Math.random() * 2) === 1) {
        whosTurn = 'computer';
    }
    startFlag = true;
});

//Reset gameboard logic
document.querySelector('#resetButton').addEventListener('click', (e) => {
    human.resetLayout();
    computer.resetLayout();
    UI.resetLayout(human.gameboard.shipsToCoords);
    //UI.placeShips(computer.gameboard.shipsToCoords, 'computer');
});

// Attach listeners to computer grid
document.querySelectorAll('[data-owner="computer"]').forEach(cell => {
    cell.addEventListener('click', () => takeTurn('human', cell));
});

function takeTurn(player, cell = null) {
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
        //UI.updateGameboard(attack.message);
        UI.applyMarker(attack.coord, 'hit', whosBoard);
        switchTurn();
        break;

    case "miss":
        //If the attack was a miss update the message board and switch the turn
        //UI.updateMessageBoard(attack.message);
        UI.applyMarker(attack.coord, 'miss', whosBoard);
        switchTurn();
        break;

    case "sunk":
        //If the attack sunk a ship check if the game is over then switch the turn if it isn't
        if(attack.hasWon === true) {
            endGame();
        }
        else {
            //UI.revealShip(attack.ship.name);
            //UI.updateMessageBoard(attack.message);
            switchTurn();
        }
        break;

    default:
        //UI.updateMessageBoard(attack.message);
        break;
    }

    //If it is now the computers turn, have it take its turn with a small delay
    if(whosTurn === 'computer') {
        setTimeout(() => {takeTurn('computer');
        }, 1);
    }
}

//Logic that is executed once the game ends
function endGame() {
    //Reveal all computer ship locations
    //UI.revealComputerShips();

    //Message to output to player
    let message = 'You win!';
    if(currentPlayer === 'computer') {
        message = 'Computer Wins.';
    }

    //Update the message board
    //UI.updateMessageBoard(message);

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