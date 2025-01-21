//singleton that manipulates the entire dom for the todo application

import { todoRender, todoPrompt } from "./todoRender.js";
import { projectRender, projectPrompt, updateProject } from "./projectRender.js";

const PROJECT = 'project';
const TODO = 'todo';

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

    displayProjectModal() {
        let projectModal = document.getElementById('projectModal');
        projectModal.style.display = "flex";
    
        window.onclick = function(event) {
            if (event.target == projectModal) {
              projectModal.style.display = "none";
            }
        }
    }

    closeProjectModal() {
        let projectModal = document.getElementById('projectModal');
        projectModal.style.display = "none";
    }

    //deletes the selected object from the DOM
    deleteDOM(project) {
        let projectSidebar = document.getElementById(project.id)
        projectSidebar.remove();

        let projectHero = document.getElementById('projectHero');
        projectHero.textContent = "";

        this.#clearHero();
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