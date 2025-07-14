import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Computer {
    #gameboard;
    #randomAttackCoords;

    constructor() {
        this.#gameboard = new Gameboard();
        this.#randomAttackCoords = this.generateCoordinates();
        this.#randomizeLayout();
    }

    //Randomly attacks a coordinate on humans gameboard
    takeTurn(humanGameboard) {
        //Randomly generated coordinate the computer is going to attack
        const coord = this.#randomAttackCoords.pop();

        //The results of that attack 
        const attackResults = humanGameboard.receiveAttack(coord);

        //Checking whether or not the computer has won or not
        const hasWon = humanGameboard.checkShips();

        //Returning these results as an object for the driver to analyze
        return {
            //Using key spread syntax to avoid nesting objects
            ...attackResults,
            hasWon
        }
    }

    //Resets the gameboard and generates a new layout
    resetLayout() {
        this.#gameboard.clearBoard();
        this.#randomAttackCoords = this.generateCoordinates();
        this.#randomizeLayout();
    }

    //Returns a reference to this particular computers gameboard
    get gameboard() {
        return this.#gameboard;
    }

    //Randomly places ships on gameboard
    #randomizeLayout() {
        let randomShipPlacement = this.#generateCoordinates();
        const ships = [5, 4, 3, 3, 2];
        for(let i = 0; i < ships.length; i++) {
            //Obtain the ships overall length
            const shipsLength = ships[i];

            //Flag that determines whether a ship has been placed or not
            let placed = false;

            //Loop until the ship has successfully placed on the gameboard
            while(placed !== true) {
                //Valid coordinates on the gameboard that are checked to see if other ships are there
                let coordsToCheck = [];

                //Obtain a random coordinate
                const coord = randomShipPlacement.pop();

                //X and Y coordinates for easier bounds checking and more readable code
                const X_Coord = coord[0];
                const Y_Coord = coord[1];

                //Determines if we are placing the ship vertically or horizontally
                let isVert = false;
                if(Math.floor(Math.random() * 2) === 1) {
                    isVert = true;
                }

                //Determines if ship will be placed negatively or positively
                let direction = -1;
                if(Math.floor(Math.random() * 2) === 1) {
                    direction = 1;
                }

                //Loop through every coordinate associated with a particular ship
                for(let j = 0; j < shipsLength; j++) {
                    //Where our new X and Y coordinates will be stored
                    let new_X_Coord = X_Coord;
                    let new_Y_Coord = Y_Coord;

                    //Builds full list of coordinates that a ship of a certain length could occupy
                    if(isVert === true) {
                        new_Y_Coord = Y_Coord + (direction * j);
                    }
                    else {
                        new_X_Coord = X_Coord + (direction * j);
                    }

                    //Check if the coordinate is in the gameboard
                    if (this.#inBounds([new_X_Coord, new_Y_Coord]) === false) {
                        //If this exceeds the gameboard then move on to the next coordinate
                        coordsToCheck = null;

                        //Push the coordinate back into the array for use with another ship later
                        randomShipPlacement.push(coord);

                        break;
                    }

                    //We found a valid coordinate but now we have to ensure it is not already being used
                    coordsToCheck.push([new_X_Coord, new_Y_Coord]);
                }

                //Check our list of valid coordinates to see if a ship already occupies those locations
                if(coordsToCheck !== null) {

                    //This coordinate has no overlap and fits in the gameboard we can place the ship here
                    if(this.#overlaps(coordsToCheck) === false) {
                        //Create our start and end coordinates from the validated coordinate array
                        const startCoord = coordsToCheck[0];
                        const endCoord = coordsToCheck[coordsToCheck.length - 1];

                        //Place our ship on the board and set the placed flag to true
                        this.#gameboard.placeShip(startCoord, endCoord, new Ship(shipsLength));
                        placed = true;
                    }
                }
            }
        }
    }

    //Returns true if coordinates overlap with another ship, otherwise returns false
    #overlaps(shipCoords) {
        //Loop through the coordinates checking for other ships
        for(let i = 0; i < shipCoords.length; i++) {
            const coord = shipCoords[i];
            if(this.#gameboard.getShip(coord) !== null) {
                //This coordinate overlaps with another ship
                return true;
            }
        }
        //Coordinates do not overlap with another ship
        return false;
    }

    //Returns true if coordinates are within the bounds of the gameboard, otherwise returns false
    #inBounds(coord) {
        //Check if the coordinate is in the gameboard
        if (coord[0] < 1 || coord[0] > 10 || coord[1] < 1 || coord[1] > 10) {
            //Coordinate is not inside the gameboard
            return false
        }
        //Coordinate is inside the gameboard
        return true;
    }

    //Generates randomized coordinates within the board
    #generateCoordinates() {
        let coords = [];

        //Push all of the available coordinates into an array
        for(let row = 1; row <= 10; row++) {
            for(let col = 1; col <= 10; col++) {
                coords.push([row, col]);
            }
        }

        //Utilize the Fisher-Yates shuffling algorithm to randomize the array 
        for(let i = coords.length - 1; i > 0; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [coords[i], coords[j]] = [coords[j], coords[i]];
        }

        return coords;
    }
}