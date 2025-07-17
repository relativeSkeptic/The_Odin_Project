import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Computer {
    #gameboard;
    #randomAttackCoords;

    constructor() {
        this.#gameboard = new Gameboard();
        this.#randomAttackCoords = this.#generateCoordinates();
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
        //Generate random starting coordinates for the ships
        let randomShipPlacement = this.#generateCoordinates();

        //Create an array that represents each ship and loop through and place them on the gameboard
        const ships = [5, 4, 3, 3, 2];
        for(let i = 0; i < ships.length; i++) {
            //Obtain the ships overall length
            const shipsLength = ships[i];

            //Flag to tell if the ship has been placed yet or not
            let placed = false;

            while(placed !== true) {
                //Get a random coordinate to test out
                let randomCoord = randomShipPlacement.pop();

                //Parse out X and Y coordinate for easy manipulation
                let [start_X, start_Y] = randomCoord;

                //Generate an array which represents which direction the ship will face
                let direction = ["up", "down", "left", "right"];

                //Shuffle the array for a random affect
                direction = this.#shuffleArray(direction);

                //Select the first value as the randomized direction
                let randDirection = direction[0];

                //New end coordinates for the ship
                let end_X = start_X;
                let end_Y = start_Y;

                //Generate a new end X and Y coordinate
                if(randDirection === "up") {
                    end_X = start_X - (shipsLength - 1);
                }
                else if(randDirection === "down") {
                    end_X = start_X + (shipsLength - 1);
                }
                else if(randDirection === "left") {
                    end_Y = start_Y - (shipsLength - 1);
                }
                else if (randDirection === "right") {
                    end_Y = start_Y + (shipsLength - 1);
                }

                //This is our new end coordinate
                let endCoord = [end_X, end_Y];

                //Attempt to place the ship
                let shipPlacement = this.#gameboard.placeShip(randomCoord, endCoord, new Ship(shipsLength));

                //Check to see if the ship was placed successfully 
                if(shipPlacement.result !== "success") {
                    //If not push the random coordinate back into the array for use later
                    randomShipPlacement.push(randomCoord);
                }
                else {
                    //Otherwise we exit the loop and begin the next ship
                    placed = true;
                }
            }
        }
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

        return this.#shuffleArray(coords);
    }

    //Fisher-Yates shuffling algorithm
    #shuffleArray(data) {
        //Utilize the Fisher-Yates shuffling algorithm to randomize the array 
        for(let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }

        //Return the shuffled array
        return data;
    }
}