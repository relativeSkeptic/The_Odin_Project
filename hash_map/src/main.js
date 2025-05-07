import "./styles.css";

export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.list = [];
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        if(this.checkCapacity() === true) {
            updateCapacity();
        }

        let hashCode = this.hash(key);
        
        if (hashCode < 0 || hashCode >= capacity.length) {
            throw new Error("Trying to access index out of bounds");
        }

        this.list[hashCode] = value;
    }

    get(key) {

    }

    has(key) {

    }

    remove(key) {

    }

    length() {
        return this.list.length;
    }

    clear() {
        this.list.length = 0;
    }

    keys() {

    }

    values() {

    }

    entries() {

    }

    getList() {
        return this.list;
    }

    checkCapacity() {
        if(this.list.length > this.capacity * this.loadFactor) {
            return true;
        }
        else {
            return false;
        }
    }

    updateCapacity() {
        this.capacity = this.capacity * 2;
    }
}