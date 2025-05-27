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
        //Check array to see if there is already a value assigned to that hash
        if(this.data[hash]) {
            //Bucket exists
            //Check to see if key is already used
            let bucket = this.data[hash];
            for(let i = 0; i < bucket.length; i++) {
                let [currentKey, currentValue] = bucket[i];
                if(currentKey === key) {
                    //We have already used this key once
                    //Update the old value to the new value
                    bucket[i][1] = value;
                    return;
                }
            }
            //Key was not found, push a new key value pair into array
            this.data[hash].push([key, value]);
            this.size++;
        }
        else {
            //Bucket does not exist creating a new bucket
            //Assigning new key value pair to bucket
            this.data[hash] = [[key, value]];
            this.size++;
        }
        this.checkCapacity();
    }

    get(key) {
        //Obtains hash of key
        const hash = this.hash(key);
        //Check array to see if there is already a value assigned to that hash
        if(this.data[hash]) {
            //There is a bucket
            let bucket = this.data[hash];
            for(let i = 0; i < bucket.length; i++) {
                //Search bucket for value
                let [currentKey, currentValue] = bucket[i];
                //Compare keys to ensure they match
                if(currentKey === key) {
                    //If they match then return the value associated with key
                    return currentValue;
                }
            }
        }
        
        //If key is not found then return null
        return null;
    }

    has(key) {
        //Obtains hash of key
        const hash = this.hash(key);
        //Check array to see if there is already a value assigned to that hash
        if(this.data[hash]) {
            //There is a bucket
            let bucket = this.data[hash];
            for(let i = 0; i < bucket.length; i++) {
                //Search bucket for key
                let [currentKey, currentValue] = bucket[i];
                //Compare keys to ensure they match
                if(currentKey === key) {
                    //If key is found then return true
                    return true;
                }
            }
        }
        
        //If key is not found then return false
        return false;
    }

    remove(key) {
        //Obtains hash of key
        const hash = this.hash(key);
        //Check array to see if there is already a value assigned to that hash
        if(this.data[hash]) {
            //There is a bucket
            let bucket = this.data[hash];
            for(let i = 0; i < bucket.length; i++) {
                //Search bucket for value
                let [currentKey, currentValue] = bucket[i];
                //Compare keys to ensure they match
                if(currentKey === key) {
                    //If key is found then delete value and return true
                    //Delete function returns boolean
                    return delete bucket[i];
                }
            }
        }
        
        //If key is not found then return false
        return false;
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