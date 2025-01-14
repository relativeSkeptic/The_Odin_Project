//singleton that manipulates the entire dom for the todo application

import { TYPES } from "./main.js";

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
        this._projectObjects = document.getElementById('project-objects');
    }

    getObjectData(type) {
        return this.#newObjectData(type);
    }

    modifyObject(object) {

    }

    deleteObject(object) {

    }

    updateDOM(type, object) {
        if(type === TYPES.PROJECT) {
            this.#projectDOM(object);
        }
    }

    #newObjectData(type) {
        let objectMap = new Map();

        if(type === TYPES.PROJECT) {
            return this.#projectPrompt(objectMap);
        }
        else {
            throw new error ("Invalid Object Type Provided.");
        }
    }

    #projectPrompt(projectMap) {
        let projectName = prompt("What is the name of your new Project?");
        projectMap.set('name', projectName);

        return projectMap;
    }

    #projectDOM(projectObject) {
        let projectContainer = document.createElement('div');

        projectContainer.id = projectObject.id;
        projectContainer.textContent = projectObject.name;

        this.#addProjectButtons(projectContainer);
        
        this._projectObjects.appendChild(projectContainer);
    }

    #addProjectButtons(projectContainer) {
        let deleteButton = document.createElement('button');
        let trashCan = document.createElement('img');
        trashCan.src = "../icons/trash_can.svg";
        deleteButton.appendChild(trashCan);

        let modifyButton = document.createElement('button');
        let pencil = document.createElement('img');
        pencil.src = "../icons/pencil.svg";
        modifyButton.appendChild(pencil);

        projectContainer.appendChild(modifyButton);
        projectContainer.appendChild(deleteButton);
    }
}

const DomManager = new DOM();
export default DomManager;