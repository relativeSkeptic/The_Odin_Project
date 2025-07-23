import { Player } from "./player"
import { Computer } from "./computer"

export class GameDriver {
    #player;
    #computer;
    #startingPlayer;
    #whosTurn;
    #gameStarted;
    #gameOver;

    constructor() {
        this.#player = new Player();
        this.#computer = new Computer();
        this.#startingPlayer = this.#randomizeStart();
        this.#whosTurn = this.#startingPlayer;
        this.#gameStarted = false;
        this.#gameOver = false;
    }

    //Switches the players turn between the computer and the human player
    switchTurn() {
        if(this.#whosTurn === "player") {
            this.#whosTurn = "computer";
        }
        else {
            this.#whosTurn = "player"
        }
    }

    resetGame() {

    }

    get player() {
        return this.#player;
    }

    get computer() {
        return this.#computer;
    }

    get whosTurn() {
        return this.#whosTurn;
    }

    get gameStarted() {
        return this.#gameStarted;
    }

    get gameOver() {
        return this.#gameOver;
    }

    set gameStarted(game) {
        this.#gameStarted = game;
    }

    set gameOver(over) {
        this.#gameOver = over;
    }

    //Randomly determines who starts the game
    #randomizeStart() {
        const result = Math.floor(Math.random() * 2);
        if(result === 0) {
            return "player";
        }
        else {
            return "computer";
        }
    }
}