//singleton that manages the creation and 
//modification of objects for the todo application

import Project from "./project.js";
import Todo from "./todo.js";

const PROJECT = 'project';
const TODO = 'todo';

class Factory {
    constructor() {
        this._currentProjectID = null;
        this._projectObjects = new Map();
        this._todoObjects = new Map();
    }

    createObject(objectData) {
        if(objectData.get('type') === PROJECT) {
            let id = objectData.get('name');
            id = this.#verifyKeyValueIntegrity(id, PROJECT);
            let newProject = new Project(objectData.get('name'), id);
            this._projectObjects.set(id, newProject);
            return newProject;
        }
        else if(objectData.get('type') === TODO) {
            let id = objectData.get('name');
            id = this.#verifyKeyValueIntegrity(id, TODO);
            let newTodo = new Todo(objectData.get('name'), 
                                        id, 
                                        objectData.get('description'), 
                                        objectData.get('dueDate'), 
                                        objectData.get('priority'));

            this._todoObjects.set(id, newTodo);
            return newTodo;
        }
    }

    updateObject(object, objectData) {
        if(object.type === PROJECT) {
            object.name = objectData
        }
    }

    deleteObject(object) {
        if(object.type === PROJECT) {
            for (const key of object.allTodo) {
                if (this._todoObjects.has(key)) {
                    this._todoObjects.delete(key);
                }
            }
    
            this._projectObjects.delete(object.id);
        }
    }

    getObject(id, type) {
        if(type === PROJECT) {
            return this._projectObjects.get(id);
        }
    }

    get getCurrentProjectID() {
        return this._currentProjectID;
    }

    set setCurrentProjectID(id) {
        this._currentProjectID = id;
    }

    #verifyKeyValueIntegrity(id, type) {
        let baseId = id;
        let counter = 1;

        if(type === PROJECT) {
            while (this._projectObjects.has(id)) {
                id = `${baseId}_${counter}`;
                counter++;
            }
        }
        else if (type === TODO) {
            while (this._todoObjects.has(id)) {
                id = `${baseId}_${counter}`;
                counter++;
            }
        }
        else {
            throw new error ("Invalid Object Type Provided.");
        }
    
        return id;
    }
}

const FactoryManager = new Factory();
export default FactoryManager;