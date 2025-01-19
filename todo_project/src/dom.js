//singleton that manipulates the entire dom for the todo application
import pencilSrc from "../icons/pencil.svg";
import trashCanSrc from "../icons/trash_can.svg";
import addSrc from "../icons/add_small.svg";

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
        let objectMap = new Map();

        if(type === PROJECT) {
            objectMap.set('type', PROJECT);
            return this.#projectPrompt(objectMap);
        }
        else if (type === TODO) {
            objectMap.set('type', TODO);
            return this.#todoPrompt(objectMap);
        }
        else {
            throw new error ("Invalid Object Type Provided.");
        }
    }

    //dynamically adds objects to the DOM
    addToDOM(object) {
        if(object.type === PROJECT) {
            let newProject = document.createElement('div');

            newProject.id = object.id;
            newProject.className = "project-container";
    
            this.#addProjectButtons(newProject, object.name);
            
            this._projectObjects.appendChild(newProject);
        }
        else if (object.type === TODO) {
            let newTodo = document.createElement('div');

            newTodo.id = object.id;
            newTodo.className = "todo-objects";
    
            this.#addTodoButtons(newTodo, object.name);
    
            this._todoContainer.appendChild(newTodo);
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
    deleteDOM(objectID) {
        let element = document.getElementById(objectID)
        element.remove();

        while (this._hero.firstChild) {
            this._hero.removeChild(this._hero.firstChild);
        }
    }

    //renders the selected object into the DOM
    //if there are multiple projects this renders
    //whichever project the user requests
    renderDOM(object) {
        this.#renderProjectName(object.name);
        this.#renderTodoObjects(object.allTodo);
    }

    //renders the DOM to get the needed data
    //from the user to create a project object
    #projectPrompt(projectMap) {
        let projectName = prompt("What is the name of your Project?");
        projectMap.set('name', projectName);

        return projectMap;
    }

    //renders the DOM to get the needed data
    //from the user to create a todo object
    #todoPrompt(todoMap) {
        let name = prompt('What is the name of your task?');
        let description = prompt('Describe the task to be completed: ');
        let dueDate = prompt('When is the task due?');
        let priority = prompt('Is this a high priority item?');

        todoMap.set('name', name);
        todoMap.set('description', description);
        todoMap.set('dueDate', dueDate);
        todoMap.set('priority', priority);

        return todoMap;
    }

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

    #addTodoButtons(todo) {

    }

    //deletes all of the current objects in the hero 
    //and rerenders the hero with the requested project
    #renderProjectName(projectName) {
        while (this._todoContainer.firstChild) {
            this._todoContainer.removeChild(this._todoContainer.firstChild);
        }

        let projectHero = document.getElementById("projectHero");
        projectHero.textContent = projectName;
    }

    //renders all of the todo objects for the requested project
    //in the hero
    #renderTodoObjects(listOfTodoObjects) {
        for(const value of listOfTodoObjects.values()) {
            let newTodo = document.createElement('div');
            newTodo.textContent = value.name;
            newTodo.className = "todo-objects";
            this._todoContainer.appendChild(newTodo);
        }
    }
}

const DomManager = new DOM();
export default DomManager;