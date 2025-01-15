//singleton that manipulates the entire dom for the todo application
import pencilSrc from "../icons/pencil.svg";
import trashCanSrc from "../icons/trash_can.svg";
import projectSrc from "../icons/work.svg";

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

    deleteDOM(objectID) {
        let element = document.getElementById(objectID)
        element.remove();
    }

    modifyDOM(type, object) {
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
        let projectName = prompt("What is the name of your Project?");
        projectMap.set('name', projectName);

        return projectMap;
    }

    #projectDOM(projectObject) {
        let projectContainer = document.createElement('div');

        projectContainer.id = projectObject.id;

        this.#addProjectButtons(projectContainer, projectObject.name);
        
        this._projectObjects.appendChild(projectContainer);
    }

    #addProjectButtons(projectContainer, name) {
        let leftContainer = document.createElement('div');
        leftContainer.className = "flex flex-col w-full font-bold rounded-lg";
    
        let projectButton = document.createElement('button');
        projectButton.id = projectContainer.id + "_project";
        projectButton.className = "flex gap-2 items-center";
    
        let projectImage = document.createElement('img');
        projectImage.src = projectSrc;
    
        let buttonText = document.createTextNode(name);
        projectButton.appendChild(projectImage);
        projectButton.appendChild(buttonText);
    
        leftContainer.appendChild(projectButton);
    
        let rightContainer = document.createElement('div');
        rightContainer.className = "flex gap-2";

        let modifyButton = document.createElement('button');
        modifyButton.id = projectContainer.id + "_modify";
    
        let pencil = document.createElement('img');
        pencil.src = pencilSrc; 
        modifyButton.appendChild(pencil);
    
        rightContainer.appendChild(modifyButton);
    
        let deleteButton = document.createElement('button');
        deleteButton.id = projectContainer.id + "_delete";
    
        let trashCan = document.createElement('img');
        trashCan.src = trashCanSrc; 
        deleteButton.appendChild(trashCan);
    
        rightContainer.appendChild(deleteButton);
    
        projectContainer.appendChild(leftContainer);
        projectContainer.appendChild(rightContainer);
        projectContainer.className = "flex items-center hover:bg-gray-100 hover:rounded-l justify-between p-1";
    }
}

const DomManager = new DOM();
export default DomManager;