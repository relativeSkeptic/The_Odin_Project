//singleton that manipulates the entire dom for the todo application
import pencilSrc from "../icons/pencil.svg";
import trashCanSrc from "../icons/trash_can.svg";
import addSrc from "../icons/add_small.svg";

const PROJECT = 'project';

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
        this._projectObjects = document.getElementById('project-objects');
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
        let newProject = document.createElement('div');

        newProject.id = object.id;

        this.#addProjectButtons(newProject, object.name);
        
        this._projectObjects.appendChild(newProject);
    }

    #addProjectButtons(newProject, name) {
        let leftContainer = document.createElement('div');
        leftContainer.className = "flex flex-col w-full font-bold rounded-lg";
    
        let projectButton = document.createElement('button');
        projectButton.id = newProject.id + "_project";
        projectButton.className = "flex gap-2 items-center";
        
        let buttonText = document.createElement('p');
        buttonText.id = newProject.id + "_text";
        buttonText.textContent = name;
        projectButton.appendChild(buttonText);
    
        leftContainer.appendChild(projectButton);
    
        let rightContainer = document.createElement('div');
        rightContainer.className = "flex gap-2";

        let addButton = document.createElement('button');
        addButton.id = newProject.id + "_add";

        let add = document.createElement('img');
        add.src = addSrc;
        addButton.appendChild(add);

        rightContainer.appendChild(addButton);

        let modifyButton = document.createElement('button');
        modifyButton.id = newProject.id + "_modify";
    
        let pencil = document.createElement('img');
        pencil.src = pencilSrc; 
        modifyButton.appendChild(pencil);
    
        rightContainer.appendChild(modifyButton);
    
        let deleteButton = document.createElement('button');
        deleteButton.id = newProject.id + "_delete";
    
        let trashCan = document.createElement('img');
        trashCan.src = trashCanSrc; 
        deleteButton.appendChild(trashCan);
    
        rightContainer.appendChild(deleteButton);
    
        newProject.appendChild(leftContainer);
        newProject.appendChild(rightContainer);
        newProject.className = "flex items-center hover:bg-gray-100 hover:rounded-l justify-between p-1";
    }
}

const DomManager = new DOM();
export default DomManager;