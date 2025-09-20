import hitMarker from '../icons/red-x.svg';
import missMarker from '../icons/circle.svg';

export class UserInterface {
    #playerShips;

    constructor(ships) {
        this.#playerShips = ships;
        this.#generateBoards();
        this.placeShips(ships);
    }

    //Allows the placement of ships with a provided map
    placeShips(map, owner = 'human') {
        //Loop through the map and piece out the ship object and its coordinates
        for(const [ship, location] of map) {
            //Loop through every coordinate for each ship
            for(let i = 0; i < location.length; i++) {
                //Create a new div that will house the ship object
                let shipPiece = document.createElement('div');

                //Set the ship name
                shipPiece.dataset.shipName = ship;

                //Add the appropriate styling to the ship
                if(i === 0) {
                    shipPiece.classList.add('ship-end');
                }
                else if (i === location.length - 1){
                    shipPiece.classList.add('ship-end');
                }
                else {
                    shipPiece.classList.add('ship-body');
                }

                if(owner === 'computer') {
                    shipPiece.dataset.owner = 'computer';
                    shipPiece.classList.add('computer-ship');
                }
                else {
                    shipPiece.dataset.owner = 'human';
                }

                //Parse out the X and Y coordinate of this particular ship from the provided map
                const [x, y] = location[i];

                //Obtain the correct coordinate to place the ship piece
                const coordPlacement = document.querySelector(`[data-owner="${owner}"][data-x="${x}"][data-y="${y}"]`);

                //Append the new ship piece to the extracted coordinate
                coordPlacement.append(shipPiece);
            }
        }
    }

    //Checks if the provided coordinates are occupied
    checkShip(coordSet) {
        //Loop through the coordinate set that was provided
        for (coord in coordSet) {
            //Parse out the x and y coordinates
            const [x, y] = coord;

            //Find the specific grid based on the provided x and y coordinates
            const grid = document.querySelector(`[data-owner="human"][data-x="${x}"][data-y="${y}"]`);

            //Check to see if the grid is occupied already or not
            if (grid.dataset.isOccupied === true) {
                return true;
            }
        }
        //If none of the provided grids are occupied the ship can be relocated here
        return false;
    }

    //Returns the layout to a default position
    resetLayout() {
        //Remove all objects from player board
        document.querySelectorAll('[data-owner="human"]').forEach(parentDiv => {
            while (parentDiv.firstChild) {
                parentDiv.removeChild(parentDiv.firstChild);
            }
        });

        //Remove all objects from computer board
        document.querySelectorAll('[data-owner="computer"]').forEach(parentDiv => {
            while (parentDiv.firstChild) {
                parentDiv.removeChild(parentDiv.firstChild);
            }
        });
    }

    // Reveals a computer ship once it has been sunk
    revealShip(shipName) {
        const selector = `[data-owner="computer"][data-ship-name="${shipName}"]`;
        const ships = document.querySelectorAll(selector);

        ships.forEach((shipElement) => {
            shipElement.classList.remove('computer-ship');
        });
    }

    //Reveals all computer ships on the gameboard
    revealComputerShips() {
        const shipNames = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat'];
        for(const name of shipNames) {
            this.revealShip(name);
        }
    }

    //Updates the message board with a provided message
    updateMessageBoard(message) {
        const status = document.getElementById('status');
        status.textContent = message;
    }

    //Apply's a hit or miss marker on a coordinate
    applyMarker(coord, result, owner) {
        //Parse out the X and Y coordinates for finding it on the board
        const [x, y] = coord;
        const cell = document.querySelector(`[data-owner="${owner}"][data-x="${x}"][data-y="${y}"]`);
        const img = document.createElement('img');
        //The attack was a hit
        if(result === 'hit') {
            img.src = hitMarker;
            img.classList.add('marker');
            cell.appendChild(img);
        }
        //The attack was a miss
        else {
            img.src = missMarker;
            img.classList.add('marker');
            cell.appendChild(img);
        }
    }

    //Generates both the computer and player game boards
    #generateBoards() {
        this.#createGrid(document.getElementById("computer"));
        this.#createGrid(document.getElementById("human"));
    }

    //Dynamically create a UI grid
    #createGrid(container, boardLength = 10) {
        //X coordinate letters
        const letters = "ABCDEFGHIJ";

        //Check if this is the player or human container
        let boardOwner = "computer";
        if(container.id === "human") {
            boardOwner = "human";
        }

        //Loop through all of the X and Y coordinates to create the grid and assign the correct values to it
        for (let y = boardLength; y >= 1; y--) {
            for (let x = 1; x <= boardLength; x++) {
                const cell = document.createElement('div');
                const coord = `${letters[x - 1]}${y}`;
                cell.id = `${boardOwner}-${coord}`;
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.dataset.owner = boardOwner;
                if(boardOwner === 'human') {
                    cell.dataset.isOccupied = false;
                }
                cell.className = 'board-cell board-cell:hover';
                container.appendChild(cell);
            }
        }
    }
}