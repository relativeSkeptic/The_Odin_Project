import { HashMap } from './main'
import { inputCapacity } from './inputs';
import { outputCapacity } from './outputs';

function testCapacity(nodes) {
    let hashMap = new HashMap();
    for (let i = 0; i < nodes; i++) {
        hashMap.set(i.toString(), 'Test ' + i.toString());
    }
    return hashMap.getSize();
}


function capacityOutputs() {
    console.log('Testing Hash Map load factor...');
    Object.entries(inputCapacity).forEach(([key, value]) => {
        console.log('Inputting ' + value + ' nodes into Hash Map');

        let actualCapacity = testCapacity(value);
        let expectedCapacity = outputCapacity[key];

        console.log('Expected Capacity: ' + expectedCapacity);
        console.log('Actual Capacity: ' + actualCapacity);

        if(expectedCapacity === actualCapacity) {
            console.log('%cPASS', 'color: green; font-weight: bold;');
        }
        else {
            console.log('%cFAIL', 'color: red; font-weight: bold;');
        }
        console.log('%c-----', 'color: yellow; font-weight: bold;');
    });
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
    capacityOutputs();
}

testHashMapClass();