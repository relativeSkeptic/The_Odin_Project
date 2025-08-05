export class Gameboard {
    #attackCoord;
    #shipPositions;
    #shipToCoords;
    #ships

    constructor() {
        this.#ships = new Set();
        this.#shipToCoords = new Map();
        this.#shipPositions = new Map();
        this.#attackCoord = new Set();
    }

    //Takes a pair of coordinates and determines if a ship was hit
    receiveAttack(coord) {
        //Validate the coordinates
        if (!this.#isValidCoordinate(coord)) {
            return {
                result: "error",
                message: "Coordinates are not valid.",
                coord: coord
            };
        }

        //Converts the coordinates into a string for use with a Set
        const stringCoord = this.#coordToString(coord);

        //Check if the coordinate has been hit already
        if(this.#attackCoord.has(stringCoord) === true) {
            return {
                result: "warning",
                message: "Coordinate has already been hit.",
                coord: coord
            };
        }
        else {
            //It has not so we now we attack the ship and update the set
            this.#attackCoord.add(stringCoord);
        }

        //Determine if the value is a hit or a miss
        if(this.#shipPositions.has(stringCoord) === true) {
            const ship = this.#shipPositions.get(stringCoord);
            ship.hit();
            if(ship.isSunk === true) {
                return {
                    result: "sunk",
                    ship: this.#shipPositions.get(stringCoord),
                    message: "Ship has been sunk.",
                    coord: coord
                };
            } 
            else {
                return {
                    result: "hit",
                    ship: this.#shipPositions.get(stringCoord),
                    message: "Ship has been hit.",
                    coord: coord
                };
            }
        }
        else {
            return {
                result: "miss",
                message: "Shot missed.",
                coord: coord
            };
        }
    }

    //Allows the user to place an individual ship on a gameboard
    placeShip(startCoord, endCoord, ship) {
        //Validate the coordinates
        if (!this.#isValidCoordinate(startCoord)) {
            return {
                result: "error",
                message: "Start coordinates are not valid.",
                coord: startCoord
            };
        }

        if (!this.#isValidCoordinate(endCoord)) {
            return {
                result: "error",
                message: "End coordinates are not valid.",
                coord: endCoord
            };
        }

        //Ensure the coordinates are in a straight line (vertical or horizontal)
        if(startCoord[0] !== endCoord[0] && startCoord[1] !== endCoord[1]) {
            return {
                result: "error",
                message: "Coordinates are not in a straight line.",
                coord: [startCoord, endCoord]
            };
        }

        //Determine if ship is horizontal or vertical
        let shipDiff = 0;
        let [start_X, start_Y] = startCoord;
        let [end_X, end_Y] = endCoord;

        // Normalize coordinates (low to high)
        if(start_X > end_X || start_Y > end_Y) {
            if (start_X !== end_X) {
                [start_X, end_X] = [Math.min(start_X, end_X), Math.max(start_X, end_X)];
            }
            if (start_Y !== end_Y) {
                [start_Y, end_Y] = [Math.min(start_Y, end_Y), Math.max(start_Y, end_Y)];
            }
        }

        if(start_X === end_X) {
            //Horizontal
            shipDiff = Math.abs(end_Y - start_Y + 1);
        }
        else {
            //Vertical
            shipDiff = Math.abs(end_X - start_X + 1);
        }

        //Check to see if ship length is equal to coordinate difference
        if(ship.length !== shipDiff) {
            return {
                result: "error",
                message: "Ship length does not match the number of coordinates provided.",
                coord: [startCoord, endCoord]
            }
        }

        //Generate the ships coordinates and ensure they do not overlap any other ships
        const shipCoords = this.#getShipCoordinates(startCoord, endCoord);

        //Check to see if any of the coordinates are already in use
        for(const coord of shipCoords) {
            const key = this.#coordToString(coord);
            //The coordinate is already in use so return an error message
            if(this.#shipPositions.has(key)) {
                return {
                    result: "error",
                    message: "Coordinate is already in use.",
                    coord: coord
                }
            }
        }

        //Array that will store all of a ships coordinates
        let coordsArray = [];

        //The coordinates are not in use so place the ship
        for(const coord of shipCoords) {
            const key = this.#coordToString(coord);

            //The key is a string version of the coordinate and the value is a reference to the ship
            this.#shipPositions.set(key, ship);

            //Push a coordinate into the array
            coordsArray.push(coord);
        }

        //The ships length is the key and its coordinates are the value
        this.#shipToCoords.set(ship, coordsArray);

        //Adding all of the referenced ships to just a Set for easy access later
        this.#ships.add(ship);

        //Return a success message
        return {
            result: "success",
            message: "Ship was successfully placed.",
            coord: [startCoord, endCoord]
        }
    }

    //Obtains a reference to a individual ship at a set of coordinates
    //If no ship exists at these coordinates return null
    getShip(coord) {
        const key = this.#coordToString(coord);
        if (key === null || !this.#shipPositions.has(key)) {
            return null;
        }
        return this.#shipPositions.get(key);
    }

    //Returns true if all ships have been sunk on a gameboard, otherwise returns false
    checkShips() {
        //Loop through all available ships, and if any one has not sunk return false
        for(const ship of this.#ships) {
            if(ship.isSunk === false) {
                return false;
            }
        }
        //Otherwise it means they have all sunk and we return true
        return true;
    }

    //Loops through and clears all maps and sets tied to this particular gameboard
    clearBoard() {
        this.#shipToCoords.clear();
        this.#shipPositions.clear();
        this.#attackCoord.clear();
        this.#ships.clear();
    }

    //Returns the set of coordinates that have been attacked on this gameboard
    get attackCoord() {
        return this.#attackCoord;
    }

    //Returns the set of coordinates of each ship on this gameboard
    get shipPositions() {
        return this.#shipPositions;
    }

    //Returns a map with a ship as a key and the coordinates as a value
    get shipsToCoords() {
        return this.#shipToCoords;
    }

    //Returns a set that contains all available ships within a particular gameboard
    get ships() {
        return this.#ships;
    }

    //Helper function that converts coordinates to string to be used with Set
    #coordToString(coord) {
        //Ensures passed in parameter is a valid coordinate
        if (!Array.isArray(coord) ||
            coord.length !== 2 ||
            typeof coord[0] !== 'number' ||
            typeof coord[1] !== 'number'
        ) 
        {
            return null;
        }

        return `${coord[0]},${coord[1]}`;
    }

    //Helper function that validates if a set of coordinates is valid and within the gameboard
    #isValidCoordinate(coord) {
    return (
        Array.isArray(coord) &&
        coord.length === 2 &&
        Number.isInteger(coord[0]) &&
        Number.isInteger(coord[1]) &&
        coord[0] >= 1 && coord[0] <= 10 &&
        coord[1] >= 1 && coord[1] <= 10
    );
    }

    //Helper function that returns an array of coordinates for the location of a particular ship
    #getShipCoordinates(startCoord, endCoord) {
        const shipCoords = [];

        // Check if the ship is horizontal
        if (startCoord[0] === endCoord[0]) {
            const row = startCoord[0];
            const startCol = startCoord[1];
            const endCol = endCoord[1];
            const step = startCol < endCol ? 1 : -1;

            for (let col = startCol; col !== endCol + step; col += step) {
                shipCoords.push([row, col]);
            }
        }
        // Otherwise, it must be vertical
        else {
            const col = startCoord[1];
            const startRow = startCoord[0];
            const endRow = endCoord[0];
            const step = startRow < endRow ? 1 : -1;

            for (let row = startRow; row !== endRow + step; row += step) {
                shipCoords.push([row, col]);
            }
        }

        return shipCoords;
    }
}