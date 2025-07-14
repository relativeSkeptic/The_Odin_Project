import { Gameboard } from "./gameboard";
import { Ship } from "./ship"

export class Player {
    #gameboard;
    #isReady;

    constructor() {
        this.#gameboard = new Gameboard();
        this.#isReady = false;
        this.#defaultLayout();
    }

    //Logic that is executed when a player takes their turn
    takeTurn(coord, computerGameboard) {

    }

    //Resets gameboard and to default layout
    resetLayout() {
        this.#gameboard.clearBoard();
        this.#defaultLayout();
        this.#isReady = true;
    }

    //Updates wether or not the user is ready to begin the game
    set isReady(isReady) {
        this.#isReady = isReady;
    }

    //Returns a reference to this particular players gameboard
    get gameboard() {
        return this.#gameboard;
    }

    //Returns true if the player is ready to start the game
    get setReady() {
        return this.#isReady;
    }

    //Standard layout of game board
    #defaultLayout() {
        const ships = [5, 4, 3, 3, 2];
        for (let i = 0; i < ships.length; i++) {
            const col = 10 - i;
            const length = ships[i];
            const start = [1, col];
            const end = [length, col];
            this.#gameboard.placeShip(start, end, new Ship(length));
        }
        this.#isReady = true
    }
}