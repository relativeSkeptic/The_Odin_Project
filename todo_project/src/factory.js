//singleton that manages the creation, deletion, 
//and modification of objects for the todo application

import { TYPES } from "./main.js";
import Project from "./project.js";
import Todo from "./todo.js";

class Factory {
    constructor() {
        this._projectObjects = new Map();
        this._todoObjects = new Map ();
    }

    createObject(type, objectData) {
        if(type === TYPES.PROJECT) {
            //this needs to be updated to work with more than one key
            this.#verifyKeyIntegrity(this._projectObjects, objectData);
            this._projectObjects.set(objectData.get('name'), new Project(objectData.get('name')));
            console.log(this._projectObjects);
        }
    }

    deleteObject() {

    }

    updateObject() {

    }

    //ensures keys all have a unique value
    #verifyKeyIntegrity(objectMap, objectData) {
        let name = objectData.get('name');
        while(objectMap.has(objectData.get('name'))) {
            let increment = 1;
            this.#updateKeyName(objectData, name, increment);
            increment++;
        }
    }

    //if key name is non-unique updates the name of the key
    #updateKeyName(objectData, name, increment) {
        const newValueName = objectData.get('name') + num.toString()
        objectData.delete('name');
        objectData.set('name', newValueName);
    }
}

const FactoryManager = new Factory();
export default FactoryManager;