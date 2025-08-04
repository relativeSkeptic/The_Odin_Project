export class Ship {
    #length;
    #numHits;
    #isSunk;
    #name;

    constructor(length, name) {
        if (!Number.isInteger(length) || length < 1 || length > 5) {
            throw new Error("Length of ship is invalid");
        }

        this.#name = name;
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

    // Checks if that current ship has been destroyed or not
    get isSunk() {
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

    //Returns the name of the ship
    get name() {
        return this.#name;
    }
}