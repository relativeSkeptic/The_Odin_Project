// global const representing total 
// maximum number of squares for board
const MAX_SQUARES = 9;

// game board constructor 
function GameBoard() {
    container = document.getElementById("box");
    for (let i = 0; i < MAX_SQUARES; i++) {
        let boardPiece = document.createElement('div');
        boardPiece.className = "board-piece";
        boardPiece.style.backgroundColor = "white";
        container.appendChild(boardPiece);
    }
}

// creating new game board object
gameBoard = new GameBoard();