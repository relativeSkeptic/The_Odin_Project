import { HashMap } from './main'
import { hashKeys, loadValues } from './testValues';

function testHashFunction() {
    let hashMap = new HashMap();
    console.log('Testing hash function...');
    for (const key in hashKeys) {
        if (hashKeys.hasOwnProperty(key)) {
            const value = hashKeys[key];
            console.log('------');
            console.log('Testing ' + key + ' key');
            console.log('Value: ' + value);
            console.log('Generating Hash...');
            let hashCode = hashMap.hash(value);
            console.log('Hash: ' + hashCode);
        }
    }
}

function testLoadFactor(nodes) {
    console.log('Testing Hash Map load factor...');
    console.log('Loading ' + nodes + ' into Hash Map.');

    let hashMap = new HashMap();
    for (let i = 0; i < nodes; i++) {
        hashMap.hash('test');
    }

    return hashMap.capacity;
}

function testSetFunction() {

}

function testGetFunction() {

}

function testHasFunction() {

}

function testRemoveFunction() {

}

function testHashMapClass() {
    testHashFunction();
}

testHashMapClass();