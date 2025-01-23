//singleton that manipulates the entire dom for the todo application

import { todoRender, renderAddTodoButton } from "./todoRender.js";
import { projectRender, updateProject } from "./projectRender.js";

const PROJECT = 'project';
const TODO = 'todo';
const NEW = 'new';
const SETTINGS = 'settings';

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
        this._hero = document.getElementById('hero');
        this._projectObjects = document.getElementById('project-objects');
        this._todoContainer = document.getElementById('todoContainer');
    }

    //gets necessary data for object creation
    getObjectData(type) {
        if(type === PROJECT) {
            return projectPrompt();
        }
        else if (type === TODO) {
            return todoPrompt();
        }
    }

    displayProjectModal(type) {
        let projectModal = null;
        if(type === NEW) {
            projectModal = document.getElementById('newProjectModal');
        }
        else if(type === SETTINGS) {
            projectModal = document.getElementById('projectSettingsModal');
        }
        projectModal.style.display = "flex";
    
        window.onclick = function(event) {
            if (event.target == projectModal) {
              projectModal.style.display = "none";
            }
        }
    }

    displayTodoModal(type) {
        let todoModal = null;
        if(type === NEW) {
            todoModal = document.getElementById('newTodoModal');
        }
        else if(type === SETTINGS) {
            todoModal = document.getElementById('todoSettingsModal');
        }
        todoModal.style.display = "flex";
    
        window.onclick = function(event) {
            if (event.target == todoModal) {
                todoModal.style.display = "none";
            }
        }
    }

    closeProjectModal(type) {
        let projectModal = null;
        if(type === NEW) {
            projectModal = document.getElementById('newProjectModal');
        }
        else if(type === SETTINGS) {
            projectModal = document.getElementById('projectSettingsModal');
        }
        projectModal.style.display = "none";
    }

    closeTodoModal(type) {
        let todoModal = null;
        if(type === NEW) {
            todoModal = document.getElementById('newTodoModal');
        }
        else if(type === SETTINGS) {
            todoModal = document.getElementById('todoSettingsModal');
        }
        todoModal.style.display = "none";
    }

    //deletes the selected object from the DOM
    deleteDOM(object) {
        if(object.type === PROJECT) {
            let projectSidebar = document.getElementById(project.id)
            projectSidebar.remove();
    
            let projectHero = document.getElementById('projectHero');
            projectHero.textContent = "";
    
            this.#clearHero();
        }
        else if(object.type === TODO) {
            let todoObject = document.getElementById(object.id);
            todoObject.remove();
        }
    }

    //renders the selected object into the DOM
    renderDOM(object) {
        this.#clearHero();

        if(object.id != null) {
            if(document.getElementById(object.id) === null) {
                projectRender(object);
            }
            else {
                updateProject(object);
            }

            renderAddTodoButton(object);
    
            for(const value of object.allTodo.values()) {
                todoRender(value);
            }
        }

        this._currentProjectID = object.id;
    }

    //clears the hero portion of the DOM 
    //for rerendering of new / different project
    #clearHero() {
        while (this._todoContainer.firstChild) {
            this._todoContainer.removeChild(this._todoContainer.firstChild);
        }
    }
}

const DomManager = new DOM();
export default DomManager;