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
        //Obtains hash of key
        let hash = this.hash(key);
        //Checks to ensure we are within the bounds of the array
        this.checkBounds(hash);

        //Attempts to access a bucket at a particular hash
        if (!this.data[hash]) {
            //If nothing exists create an array for that bucket
            this.data[hash] = [];
        }
        else {
            //Check if the key already exists in the bucket
            for(let i = 0; i < this.data[hash].length; i++) {
                const [currentKey] = this.data[hash][i];
                //If the key already exists update the value and return
                if(currentKey === key) {
                    this.data[hash][i][1] = value;
                    return;
                }
                
            }
        }

        this.data[hash].push([key, value]);

        this.size++;
        this.checkCapacity();
    }

    get(key) {
        const hash = this.hash(key);
        const bucket = this.data[hash];
    
        if (bucket) {
            for (let item of bucket) {
                if (Array.isArray(item)) {
                    const [bucketKey, bucketValue] = item;
                    if (bucketKey === key) {
                        return bucketValue;
                    }
                } 
                else {
                    if (item.key === key) {
                        return item.value;
                    }
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
        return this.size;
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