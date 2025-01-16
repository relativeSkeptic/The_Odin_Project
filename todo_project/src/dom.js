//singleton that manipulates the entire dom for the todo application
import pencilSrc from "../icons/pencil.svg";
import trashCanSrc from "../icons/trash_can.svg";
import projectSrc from "../icons/work.svg";

const PROJECT = 'project';

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
        this._objects = document.getElementById('project-objects');
    }

    getObjectData(type) {
        let objectMap = new Map();

        if(type === PROJECT) {
            objectMap.set('type', PROJECT);
            return this.#projectPrompt(objectMap);
        }
        else {
            throw new error ("Invalid Object Type Provided.");
        }
    }

    newDOM(object) {
        if(object.type === PROJECT) {
            this.#projectDOM(object);
        }
    }

    modifyDOM(object) {
        if(object.type === PROJECT) {
            let text = document.getElementById(object.id + "_text");
            text.textContent = object.name;
        }
    }

    deleteDOM(objectID) {
        let element = document.getElementById(objectID)
        element.remove();
    }

    #projectPrompt(projectMap) {
        let projectName = prompt("What is the name of your Project?");
        projectMap.set('name', projectName);

        return projectMap;
    }

    #projectDOM(object) {
        let projectContainer = document.createElement('div');

        projectContainer.id = object.id;

        this.#addProjectButtons(projectContainer, object.name);
        
        this._objects.appendChild(projectContainer);
    }

    #addProjectButtons(projectContainer, name) {
        let leftContainer = document.createElement('div');
        leftContainer.className = "flex flex-col w-full font-bold rounded-lg";
    
        let projectButton = document.createElement('button');
        projectButton.id = projectContainer.id + "_project";
        projectButton.className = "flex gap-2 items-center";
    
        let projectImage = document.createElement('img');
        projectImage.src = projectSrc;
        
        let buttonText = document.createElement('p');
        buttonText.id = projectContainer.id + "_text";
        buttonText.textContent = name;
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