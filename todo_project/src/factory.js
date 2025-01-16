//singleton that manages the creation and 
//modification of objects for the todo application

import Project from "./project.js";
import Todo from "./todo.js";

const PROJECT = 'project';

class Factory {
    constructor() {
        this._projectObjects = new Map();
    }

    createObject(objectData) {
        if(objectData.get('type') === PROJECT) {
            let id = objectData.get('name');
            id = this.#verifyKeyValueIntegrity(id);
            let newProject = new Project(objectData.get('name'), id);
            this._projectObjects.set(id, newProject.name);
            return newProject;
        }
    }

    updateObject(object, objectData) {
        if(objectData.get('type') === PROJECT) {
            object.name = objectData.get('name');
        }
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