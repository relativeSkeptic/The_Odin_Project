export class Ship {
    #length;
    #numHits;
    #isSunk;

    constructor(length) {
        if (typeof length !== 'number' || length < 1 || length > 5) {
            throw new Error('Invalid ship length. Must be between 1 and 5.');
        }

        this.#length = length;
        this.#numHits = 0;
        this.#isSunk = false;
    }

    // Function is called when the ship has been hit
    hit() {
        // Ensures the ship has not already been destroyed
        if (this.#isSunk) {
            return;
        }

        this.#numHits++;

        // Checks if the number of hits exceeds the ships length
        if (this.#numHits >= this.#length) {
            // If it does that means the ship has been destroyed
            this.#isSunk = true;
        }
    }

    //Used for debugging / logging purposes, returns a string that contains the current status of the ship
    toString() {
        return `Ship(length=${this.#length}, hits=${this.#numHits}, sunk=${this.#isSunk})`;
    }

    // Checks if that current ship has been destroyed or not
    get sunk() {
        return this.#isSunk;
    }

    //Returns the total number of times the ship has been hit
    get numHits() {
        return this.#numHits;
    }

    //Returns the overall length of the ship
    get length() {
        return this.#length;
    }
}