import { HashMap } from './main'

const hashKeys = {
    emptyKey: '',
    shortKey: 'red',
    longKey: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    numberKey: '1234',
    specialCharKey: '!@#$',
    caseSensitiveKey: 'tEsTWoRD',
    alphaNumSpecialCharKey: 'pAs$w0Rd'
};

function testHashFunction() {
    for (const values in hashKeys) {
        const key = hashKeys[values];
        hashValues.push(hashMap.hash(key));
        if (hashValues.length > hashMap.capacity * hashMap.loadFactor) {
            hashMap.capacity = hashMap.capacity * 2;
        }
    }

    console.log(hashValues);
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

}