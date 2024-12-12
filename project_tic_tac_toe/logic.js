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
        }
    }

    // checks to see if a particular board square is empty
    isEmpty(square) {
        if (document.getElementById(`${square}`).querySelector('svg') === true) {
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
            const boardElement = document.getElementById(`${square}`);
            while(boardElement.firstChild === true) {
                boardElement.removeChild(boardElement.firstChild);
            }
        }
    }

    // updates particular game squares based 
    // off player or computer input
    updateGameBoard(square, player) {
        if(this.isEmpty(square) === true) {
            //0 represents player X
            if(player === 0) {
                document.getElementById(`${square}`).textContent = "X";
            }
            // 1 represents player O
            else {
                document.getElementById(`${square}`).textContent = "O";
            }
        }
    }
}

class Computer {
    constructor(gameLogic, gameBoard) {
        this.logic = gameLogic;
        this.board = gameBoard;
    }

    // current computer logic is fairly simply
    // it randomly searches for an empty square
    // and selects that as its move
    selectSquare() {
        // start by checking if the board has already been filled
        // if its not full find a square and place your piece
        if(this.board.isFull() === false) {
            // infinite loop probably a better way to do this
            while(true) {
                // there should be logic here to ensure we don't check
                // duplicate numbers but I am lazy and it is only
                // nine numbers
                let randomSquare = Math.floor(Math.random() * 10);
                if(this.board.isEmpty(randomSquare) === true) {
                    this.logic.updateWhosTurn = "h";
                    return randomSquare;
                }
            }
        }
    }
}

class Player {

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
        this.turn = 0;
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
    set whoIsO(player) {
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

const gameBoard = new GameBoard();
const gameLogic = new GameLogic();
const computer = new Computer(gameLogic, gameBoard);
const player = new Player(gameLogic, gameBoard);