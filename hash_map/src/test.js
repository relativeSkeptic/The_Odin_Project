import { HashMap } from './main'
import { inputCapacity, inputGetSet } from './testInputs';
import { outputCapacity, outputGetSet } from './testOutputs';

function testCapacity(nodes) {
    let hashMap = new HashMap();
    for (let i = 0; i < nodes; i++) {
        hashMap.set(i.toString(), 'Test ' + i.toString());
    }
    return hashMap.getSize();
}

function capacityOutputs() {
    console.log('Testing Hash Map capacity...');
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

function testGetSet() {
    let hashMap = new HashMap();
    Object.entries(inputGetSet).forEach(([key, value]) => {
        console.log('Setting: ');
        console.log('Key: ' + key + ' - Value: ' + value);
        hashMap.set(key, value);
    });
}

function testLargeGetSet() {
    let hashMap = new HashMap();
    for (let i = 0; i < 1000; i++) {
        hashMap.set(i.toString(), 'input' + i.toString());
    }
}

function getSetOutputs() {
    console.log('Testing Hash Map Get / Set functions...');
    testGetSet();
}

function testHashMapClass() {
    capacityOutputs();
    getSetOutputs();
}

testHashMapClass();