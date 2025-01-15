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
            let id = objectData.get('name');
            id = this.#verifyKeyValueIntegrity(id);
            let newProject = new Project(objectData.get('name'), id);
            this._projectObjects.set(id, newProject);
            return newProject;
        }
    }

    deleteObject() {

    }

    updateObject() {

    }

    #verifyKeyValueIntegrity(id) {
        let baseId = id;
        let counter = 1;
    
        while (this._projectObjects.has(id)) {
            id = `${baseId}_${counter}`;
            counter++;
        }
    
        return id;
    }
}

const FactoryManager = new Factory();
export default FactoryManager;