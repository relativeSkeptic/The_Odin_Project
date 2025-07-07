export class Ship {
    constructor(length) {
        this.length = length;
        this.numHits = 0;
        this.isSunk = false;
    }

    // Function is called when the ship has been hit
    hit() {
        // Ensures the ship has not already been destroyed
        if (this.isSunk) {
            return;
        }

        this.numHits++;

        // Checks if the number of hits exceeds the ships length
        if (this.numHits >= this.length) {
            // If it does that means the ship has been destroyed
            this.isSunk = true;
            console.log('Ship has sunk :(');
        }
    }

    // Checks if that current ship has been destroyed or not
    sunk() {
        return this.isSunk;
    }
}
