import { Gameboard } from "./gameboard";
import { Ship } from "./ship"

export class Player {
    #gameboard;
    #isReady;

    constructor() {
        this.#gameboard = new Gameboard();
        this.#defaultLayout();
    }

    //Logic that is executed when a player takes their turn
    takeTurn(coord, computerGameboard) {
        //The results of that attack 
        const attackResults = computerGameboard.receiveAttack(coord);

        //Checking whether or not the player has won or not
        const hasWon = computerGameboard.checkShips();

        //Returning these results as an object for the driver to analyze
        return {
            //Using key spread syntax to avoid nesting objects
            ...attackResults,
            hasWon
        }
    }

    //Resets gameboard and to default layout
    resetLayout() {
        this.#gameboard.clearBoard();
        this.#defaultLayout();
    }

    //Allows the player to redefine the layout of their ships before playing
    updateLayout(shipCoords) {
        //Helps ensure a player cannot accidentally play with an invalid board
        this.#isReady = false;

        //Array to store the results of every ship placement for analysis
        let results = [];

        //Clear the gameboard to prepare for the new placement of ships
        this.#gameboard.clearBoard();

        //Validate the new layout data contains information for exactly 5 ships
        if(shipCoords.length !== 5) {
            //Return the error to the driver for processing
            return {
                result: "error",
                message: "New layout data must contain exactly 5 ships.",
                coord: shipCoords
            };
        }

        //Further validates new layout data
        for (let i = 0; i < shipCoords.length; i++) {
            //Validating the start coordinate, end coordinate, and ship length
            const [start, end, length] = shipCoords[i];
            if (!Array.isArray(start) || !Array.isArray(end) || start.length !== 2 || end.length !== 2 || typeof length !== 'number') {
                return {
                    result: "error",
                    message: "Invalid ship data at index " + i,
                    coord: shipCoords[i]
                };
            }
        }

        //Loop through the array of coords to place the ships
        for(let i = 0; i < shipCoords.length; i++) {
            //Parse out the start and end coordinate as well as the length
            const [startCoord, endCoord, length] = shipCoords[i];

            //Create a new ship and push the returned result into our results array
            results.push(this.#gameboard.placeShip(startCoord, endCoord, new Ship(length)));
        }

        //Loop through the results array to ensure they were all placed successfully
        for(const data of results) {
            if(data.result !== "success") {
                //Return the error to the driver for processing
                return {
                    result: "error",
                    message: "Layout could not be updated because " + data.message,
                    coord: data.coord
                };
            }
        }

        //Return a message saying the layout updated successfully
        return {
            result: "success",
            message: "Layout was successfully updated."
        };
    }

    //Returns a reference to this particular players gameboard
    get gameboard() {
        return this.#gameboard;
    }

    //Returns true if the player is ready to start the game
    get isReady() {
        return this.#isReady;
    }

    //Standard layout of game board
    #defaultLayout() {
        const ships = [5, 4, 3, 3, 2];
        const shipNames = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat'];
        for (let i = 0; i < ships.length; i++) {
            const col = i + 1;
            const length = ships[i];
            const name = shipNames[i];
            const start = [col, 1];
            const end = [col, length];
            this.#gameboard.placeShip(start, end, new Ship(length, name));
        }
    }
}