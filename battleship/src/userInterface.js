export class UserInterface {
    constructor(driver) {
        this.gameDriver = driver;
        this.playerGrid = document.querySelector('#player');
        this.computerGrid = document.querySelector('#computer');
        this.#generateBoards();
        this.#setupEventListeners();
        this.placeShips();
    }

    //Sets up the event listeners for all of the buttons
    #setupEventListeners() {

    }

    //Starts the game when the user clicks the start game button
    #startGame() {

    }

    //Generates both the computer and player boards
    #generateBoards() {
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
        for (let x = 10; x != 0; x--) {
            for (let y = 10; y != 0; y--) {
                const cell = document.createElement('div');
                const coord = `${letters[y]}${x}`;
                cell.id = `${boardOwner}-${coord}`;
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.dataset.owner = boardOwner;
                cell.className = 'board-cell board-cell:hover';
                container.appendChild(cell);
            }
        }
    }

    //Place the actual ships on the gameboard
    placeShips() {
        const playerShipMap = this.gameDriver.player.gameboard.shipsToCoords;
        const computerShipMap = this.gameDriver.computer.gameboard.shipsToCoords;

        console.log(playerShipMap);
        console.log(computerShipMap);

        this.#renderShips(playerShipMap, this.playerGrid);
        this.#renderShips(computerShipMap, this.computerGrid);
    }

    #renderShips(shipMap, container) {
        for (const coords of shipMap.values()) {
            coords.forEach(([x, y], index) => {
                const cell = container.querySelector(`[data-x="${x}"][data-y="${y}"]`);
                if (!cell) return;

                const shipSegment = document.createElement('div');
                if(index === 0 || index === coords.length -1) {
                    shipSegment.className = 'ship-end';
                }
                else {
                    shipSegment.className = 'ship-body';
                }

                cell.appendChild(shipSegment);
            });
        }
    }
}