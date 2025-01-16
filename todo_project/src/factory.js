//singleton that manages the creation and 
//modification of objects for the todo application

import Project from "./project.js";
import Todo from "./todo.js";

const PROJECT = 'project';
const TODO = 'todo';

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
        else if(objectData.get('type') === TODO) {
            let id = objectData.get('name');
            id = this.#verifyKeyValueIntegrity(id);
            let newTodo = new Todo(objectData.get('name'), 
                                        id, 
                                        objectData.get('description'), 
                                        objectData.get('dueDate'), 
                                        objectData.get('priority'));

            return newTodo;
        }
        else {
            throw new error ("Invalid Object Type Provided.");
        }
    }

    updateObject(object, objectData) {
        if(objectData.get('type') === PROJECT) {
            if(objectData.get('name') != "" && objectData.get('name') != null) {
                object.name = objectData.get('name');
            }
        }
    }

    deleteObject(id) {
        this._projectObjects.delete(id);
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