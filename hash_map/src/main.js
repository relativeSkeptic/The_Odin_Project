import "./styles.css";

export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.size = 0;
        this.data = [];
    }

    hash(key) {
        let hash = 0;
      
        const primeNumber = 107;
        for (let i = 0; i < key.length; i++) {
            hash = (primeNumber * hash + key.charCodeAt(i)) % this.capacity;
        }

        return hash;
    }

    set(key, value) {
        let hash = this.hash(key);
        this.checkBounds(hash);

        if (!this.data[hash]) {
            this.data[hash] = [];
        }

        this.data[hash].push([key, value]);

        this.size++;
        this.checkCapacity();
    }

    get(key) {
        let hash = this.hash(key);

        if (this.data[hash]) {
            const bucket = this.data[hash];
            for (let [bucketKey, bucketValue] of bucket) {
                if (bucketKey === key) {
                    return bucketValue;
                }
            }
        }

        return null;
    }

    has(key) {

    }

    remove(key) {

    }

    length() {

    }

    clear() {

    }

    keys() {

    }

    values() {

    }

    entries() {
        return this.data;
    }

    getSize() {
        return this.capacity;
    }

    checkCapacity() {
        if(this.size > this.capacity * this.loadFactor) {
            this.capacity = this.capacity * 2;
        }
    }

    checkBounds(index) {
        if (index < 0 || index >= this.capacity.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }
}