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
    console.log('Loading ' + nodes + ' nodes into Hash Map');

    let hashMap = new HashMap();
    for (let i = 0; i < nodes; i++) {
        hashMap.set(i.toString(), 'Test ' + i.toString());
    }

    let list = hashMap.entries();
    console.log(list);
    console.log(hashMap.capacity);
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
    testLoadFactor(50);
}

testHashMapClass();