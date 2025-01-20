//singleton that manipulates the entire dom for the todo application
import pencilSrc from "../icons/pencil.svg";
import trashCanSrc from "../icons/trash_can.svg";
import addSrc from "../icons/add_small.svg";

import { todoRender, todoPrompt } from "./todoRender.js";
import { projectRender, projectPrompt } from "./projectRender.js";

const PROJECT = 'project';
const TODO = 'todo';

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
        this._projectObjects = document.getElementById('project-objects');
        this._hero = document.getElementById('hero');
        this._todoContainer = document.getElementById('todoContainer');
    }

    //public accessor to request the necessary object data
    //for object creation
    getObjectData(type) {
        if(type === PROJECT) {
            return projectPrompt();
        }
        else if (type === TODO) {
            return todoPrompt(objectMap);
        }
        else {
            throw new error ("Invalid Object Type Provided.");
        }
    }

    //allows the user to update objects in the DOM
    modifyDOM(object) {
        if(object.type === PROJECT) {
            let text = document.getElementById(object.id + "_text");
            text.textContent = object.name;
        }
    }

    //deletes requested objects by the user from the DOM 
    deleteDOM(object) {
        let projectSidebar = document.getElementById(object.id)
        projectSidebar.remove();

        let projectHero = document.getElementById('projectHero');
        projectHero.textContent = "";

        this.#clearHero();
    }

    //renders the selected object into the DOM
    //if there are multiple projects this renders
    //whichever project the user requests
    renderDOM(object) {
        this.#clearHero();
        this.#addToDOM(object);
        this.#renderProject(object); 
    }

    //dynamically adds objects to the DOM
    #addToDOM(object) {
        if(object.type === PROJECT) {
            if(document.getElementById(object.id) === null) {
                let newProject = document.createElement('div');

                newProject.id = object.id;
                newProject.className = "project-container";
        
                this.#addProjectButtons(newProject, object.name);
                
                this._projectObjects.appendChild(newProject);
            }
        }
        else if (object.type === TODO) {
            if(document.getElementById(object.id) === null) {
                let newTodo = document.createElement('div');

                newTodo.id = object.id;
                newTodo.className = "todo-objects";
        
                this.#addTodoButtons(newTodo, object.name);
        
                this._todoContainer.appendChild(newTodo);
            }
        }
    }

    //clears the hero portion of the DOM 
    //for rerendering of new / different project
    #clearHero() {
        while (this._todoContainer.firstChild) {
            this._todoContainer.removeChild(this._todoContainer.firstChild);
        }
    }

    //creates template buttons that are used for
    //manipulating project data
    #addProjectButtons(newProject, name) {
        let leftContainer = document.createElement('div');
        leftContainer.className = "left-container";
    
        let projectButton = document.createElement('button');
        projectButton.id = newProject.id + "_render";
        projectButton.className = "project-button";
    
        let buttonText = document.createElement('p');
        buttonText.id = newProject.id + "_text";
        if (name.length > 10) {
            buttonText.textContent = name.slice(0, 10) + '...';
        } else {
            buttonText.textContent = name;
        }
        projectButton.appendChild(buttonText);
    
        leftContainer.appendChild(projectButton);
    
        let rightContainer = document.createElement('div');
        rightContainer.className = "right-container";
    
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
    }

    //creates template buttons that are used for
    //manipulating todo data
    #addTodoButtons(todo) {

    }

    //the final function that renders all of the
    //necessary data to the DOM once all of the object
    //creation, deletion, and manipulation is complete
    #renderProject(object) {
        let projectHero = document.getElementById("projectHero");
        projectHero.textContent = object.name;

        let listOfTodoObjects = object.allTodo;
        for(const value of listOfTodoObjects.values()) {
            let newTodo = document.createElement('div');
            newTodo.id = value.id;
            newTodo.className = "todo-objects";
            todoRender(newTodo, value);
            this._todoContainer.appendChild(newTodo);
        }
    }
}

const DomManager = new DOM();
export default DomManager;