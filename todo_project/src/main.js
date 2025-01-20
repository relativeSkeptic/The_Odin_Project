import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';
import { dummyProject } from './dummy.js';
import { todoMap } from './dummy.js';

const PROJECT = 'project';
const TODO = 'todo';

let projectButton = document.getElementById('new-project');

//creating a dummy object for testing
//and implementation
createDummyProject(dummyProject, todoMap);

projectButton.addEventListener("click", () => {
    let project = FactoryManager.createObject(DomManager.getObjectData(PROJECT));
    if(project.name != "" && project.name != null) {
        DomManager.renderDOM(project);
        addEventListeners(project);
    }
})

//ties event listeners to buttons
function addEventListeners(object) {
    if(object.type === PROJECT) {
        document.getElementById(object.id + '_delete').addEventListener("click", ()=> {
            FactoryManager.deleteObject(object);
            DomManager.deleteDOM(object);
        })
        document.getElementById(object.id + '_modify').addEventListener("click", ()=> {
            FactoryManager.updateObject(object, DomManager.getObjectData(PROJECT));
            DomManager.modifyDOM(object);
            DomManager.renderDOM(object);
        })
        document.getElementById(object.id + '_add').addEventListener("click", ()=> {
            let todo = FactoryManager.createObject(DomManager.getObjectData(TODO));
            if(todo.name != "" && todo.name != null) {
                object.createTodo(todo);
                DomManager.renderDOM(object);
            }
        })
        document.getElementById(object.id + "_render").addEventListener("click", ()=> {
            DomManager.renderDOM(object);
        })
    }
}

//creates a dummy class for testing and 
//initial implementation
function createDummyProject(project, todo) {
    let dummyProject = FactoryManager.createObject(project);
    for(const value of todo.values()) {
        let newTodo = FactoryManager.createObject(value);
        dummyProject.createTodo(newTodo);
    }
    DomManager.renderDOM(dummyProject);
    addEventListeners(dummyProject);
}