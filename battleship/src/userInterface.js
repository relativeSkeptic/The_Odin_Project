export class UserInterface {
    constructor() {
        this.playerGrid = document.querySelector('#player');
        this.computerGrid = document.querySelector('#computer');
    }

    //Generates both the computer and player boards
    generateBoards() {
        this.#createGrid(document.getElementById("computer"));
        this.#createGrid(document.getElementById("player"));
    }

    //Dynamically create a UI grid
    #createGrid(container, boardLength = 10) {
        //X coordinate letters
        const letters = "ABCDEFGHIJ";

        //Check if this is the player or human container
        let boardOwner = "computer";
        if(container.id === "player") {
            boardOwner = "player";
        }

        //Loop through all of the X and Y coordinates to create the grid and assign the correct values to it
        for (let y = 0; y < boardLength; y++) {
            for (let x = 0; x < boardLength; x++) {
                const cell = document.createElement('div');
                const coord = `${letters[y]}${x + 1}`;
                cell.id = `${boardOwner}-${coord}`;
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.dataset.owner = boardOwner;
                cell.className = 'w-full h-full border-2 bg-blue-200 hover:bg-blue-300 cursor-pointer';
                container.appendChild(cell);
            }
        }
    }
}