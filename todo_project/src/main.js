import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';
import { dummyProject } from './dummy.js';
import { todoMap } from './dummy.js';

const PROJECT = 'project';
const TODO = 'todo';

let projectButton = document.getElementById('new-project');

//creating a dummy object for testing and as an initial template
createDummyProject(dummyProject, todoMap);

projectButton.addEventListener("click", () => {
    let project = FactoryManager.createObject(DomManager.getObjectData(PROJECT));
    if(project.name != "" && project.name != null) {
        DomManager.addToDOM(project);
        updateSidebarButtons(project);
        DomManager.renderDOM(project);
    }
})

function updateSidebarButtons(object) {
    if(object.type === PROJECT) {
        document.getElementById(object.id + '_delete').addEventListener("click", ()=> {
            FactoryManager.deleteObject(object.id, object.allTodo);
            DomManager.deleteDOM(object.id);
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
            }
        })
        document.getElementById(object.id + "_render").addEventListener("click", ()=> {
            DomManager.renderDOM(object);
        })
    }
}

function createDummyProject(project, todo) {
    let dummyProject = FactoryManager.createObject(project);
    for(const value of todo.values()) {
        let newTodo = FactoryManager.createObject(value);
        dummyProject.createTodo(newTodo);
    }
    DomManager.addToDOM(dummyProject);
    updateSidebarButtons(dummyProject);
    let todoMap = dummyProject.allTodo;
    for(const value of todoMap.values()) {
        DomManager.addToDOM(value);
    }
    DomManager.renderDOM(dummyProject);
}