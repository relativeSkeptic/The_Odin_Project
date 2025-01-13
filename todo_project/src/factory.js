//singleton that manages the creation, deletion, 
//and modification of objects for the todo application

import { Types } from "./main.js";
import Project from "./project.js";
import Todo from "./todo.js";

class Factory {
    constructor() {
        this._projectObjects = new Map();
        this._todoObjects = new Map ();
    }

    createObject(type, objectData) {
        if(type === Types.PROJECT) {
            this.#verifyKeyIntegrity(Types.PROJECT, objectData);
        }
    }

    deleteObject() {

    }

    updateObject() {

    }

    //ensures keys all have a unique value
    #verifyKeyIntegrity(type, objectData) {
        if(type === Types.PROJECT) {
            const projectKeys = Array.from(this._projectObjects.keys());
            const objectKey = Array.from(objectData);
        }
    }

    //if key name is non-unique updates the name of the key
    #updateKeyName() {

    }
}

const FactoryManager = new Factory();
export default FactoryManager;