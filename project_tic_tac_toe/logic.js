// global const representing total 
// maximum number of squares for board
const MAX_SQUARES = 9;

class GameBoard {
    constructor() {
        const container = document.getElementById("box");
        for (let i = 0; i < MAX_SQUARES; i++) {
            let boardSquare = document.createElement('div');
            boardSquare.id = `${i}`;
            boardSquare.style.backgroundColor = "white";
            container.appendChild(boardSquare);
            boardSquare.addEventListener("click", function() {
                gameBoard.update(i);
            });
        }
        const clearBoard = document.getElementById("reset-board");
        clearBoard.addEventListener("click", function() {
            gameBoard.clearGameBoard();
            gameLogic.updateWhoIsX = "h";
            gameLogic.updateWhoIsO = "c";
            gameLogic.updateWhosTurn = "h";
        })
        const clearStats = document.getElementById("reset-stats");
        clearStats.addEventListener("click", function() {
            gameLogic.updatePlayerWins(0);
            gameLogic.updateComputerWins(0);
            gameBoard.clearGameBoard();
            gameLogic.updateWhoIsX = "h";
            gameLogic.updateWhoIsO = "c";
            gameLogic.updateWhosTurn = "h";
        })
    }

    update(iteration) {
        if(gameLogic.whosTurn === "h" && gameBoard.isEmpty(iteration) === true) {
            gameBoard.updateGameBoard(iteration, gameLogic.whatIsHuman)
            gameLogic.updateWhosTurn = "c";
            computer.computerTurn();
        }
        if(gameLogic.checkForTie() === true) {
            alert("Game is a tie.");
            gameBoard.clearGameBoard();
        }
    }

    // checks to see if a particular board square is empty
    isEmpty(square) {
        if (document.getElementById(`${square}`).textContent.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    // checks to see if the game board is full
    isFull() {
        let squaresFilled = 0;
        for(let i = 0; i < MAX_SQUARES; i++) {
            if(this.isEmpty(i) === false) {
                squaresFilled += 1;
            }
        }
        if(squaresFilled >= MAX_SQUARES) {
            return true;
        }
        else {
            return false;
        }
    }

    // clears game board for new game
    clearGameBoard() {
        for(let i = 0; i < MAX_SQUARES; i++) {
            const boardElement = document.getElementById(`${i}`);
            boardElement.textContent = "";
        }
    }

    // updates particular game squares based 
    // off player or computer input
    updateGameBoard(square, player) {
        let update = document.getElementById(`${square}`);
        if(this.isEmpty(square) === true) {
            update.style.display = "flex";
            update.style.justifyContent = "center";
            update.style.alignItems = "center";
            update.style.fontSize = "6rem";
            //0 represents player X
            if(player === "x") {
                update.textContent = "X";
            }
            // 1 represents player O
            else {
                update.textContent = "O";
            }
        }
    }

    // returns the current status of the board as an array
    get getBoard() {
        let boardArray = [];
        for(let i = 0; i < MAX_SQUARES; i++) {
            boardArray.push(document.getElementById(`${i}`).textContent)
        }
        return boardArray;
    }
}

class Computer {
    constructor() {
        if(gameLogic.whosTurn === "c") {
            gameBoard.updateGameBoard(this.selectSquare(), gameLogic.whatIsComputer);
            gameLogic.updateWhosTurn = "h";
        }
    }

    // current computer logic is fairly simply
    // it randomly searches for an empty square
    // and selects that as its move
    selectSquare() {
        // start by checking if the board has already been filled
        // if its not full find a square and place your piece
        if(gameBoard.isFull() === false) {
            // infinite loop probably a better way to do this
            while(true) {
                // there should be logic here to ensure we don't check
                // duplicate numbers but I am lazy and it is only
                // nine numbers
                let randomSquare = Math.floor(Math.random() * 8);
                if(gameBoard.isEmpty(randomSquare) === true) {
                    return randomSquare;
                }
            }
        }
    }

    computerTurn() {
        gameBoard.updateGameBoard(this.selectSquare(), gameLogic.whatIsComputer);
        gameLogic.updateWhosTurn = "h";
    }
}

// used to store game logic between user and computer
// to simply things player x is represented by 0
// player o is represented by 1
// human player is represented by h
// computer player is represented by c
class GameLogic {
    constructor() {
        this.playerX = this.randomizeStartingPlayer();
        if(this.playerX === "h") {
            this.playerO = "c";
        }
        else {
            this.playerO = "h";
        }
        this.playerWins = 0;
        this.computerWins = 0;
        this.turn = this.playerX;
        const playAsX = document.getElementById("play-x");
        playAsX.addEventListener("click", function() {
            gameBoard.clearGameBoard();
            gameLogic.updateWhoIsX = "h";
            gameLogic.updateWhoIsO = "c";
            gameLogic.updateWhosTurn = "h";
        })
        const playAsY = document.getElementById("play-y");
        playAsY.addEventListener("click", function() {
            gameBoard.clearGameBoard();
            gameLogic.updateWhoIsX = "c";
            gameLogic.updateWhoIsO = "h";
            gameLogic.updateWhosTurn = "c";
            computer.computerTurn();
        })
    }

    // uses random math lib to determine who is the starting player
    randomizeStartingPlayer() {
        if(Math.floor((Math.random() + 1) * 3) % 2 === 0) {
            return "h";
        }
        else {
            return "c";
        }
    }

    // after every turn checks the board to
    // see if there is a winner
    checkForWinner() {
        let board = gameBoard.getBoard;
        
    }

    // after every turn check to see if there
    // is a tie
    checkForTie() {
        if(gameBoard.isFull() === true) {
            return true;
        }
        else {
            gameLogic.checkForWinner();
            return false; 
        }
    }

    // returns the player in which who's turn it is
    get whosTurn() {
        return this.turn;
    }

    // returns which player is X
    get whoIsX() {
        return this.playerX;
    }

    // returns which player is O
    get whoIsO() {
        return this.playerO;
    }

    get whatIsHuman() {
        if(this.whoIsX === "h") {
            return "x";
        }
        else {
            return "o";
        }
    }

    get whatIsComputer() {
        if(this.whoIsX === "c") {
            return "x";
        }
        else {
            return "o";
        }
    }

    // returns which player wins
    get getPlayerWins() {
        return this.playerWins;
    }

    // returns which computer wins
    get getComputerWins() {
        return this.computerWins;
    }

    // updates which player is X
    set updateWhoIsX(player) {
        this.playerX = player;
    }

    // updates which player is O
    set updateWhoIsO(player) {
        this.playerO = player;
    }

    // updates player wins
    set updatePlayerWins(wins) {
        this.playerWins = wins;
    }

    // updates computer wins
    set updateComputerWins(wins) {
        this.computerWins = wins;
    }

    // updates whos turn it currently is
    set updateWhosTurn(player) {
        this.turn = player;
    }

    //resets current game logic to prepare for a new game
    resetStats() {
        this.updatePlayerWins(0);
        this.updateComputerWins(0);
    }
}

const gameLogic = new GameLogic();
const gameBoard = new GameBoard();
const computer = new Computer();