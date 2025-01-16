import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';
import { dummyData } from './dummy.js';

const PROJECT = 'project';
const TODO = 'todo';

let projectButton = document.getElementById('new-project');

//creating a dummy object for testing and as an initial template
createDummyProject(dummyData);

projectButton.addEventListener("click", () => {
    let project = FactoryManager.createObject(DomManager.getObjectData(PROJECT));
    if(project.name != "" && project.name != null) {
        DomManager.newDOM(project);
        DomManager.renderDOM(project);
        updateButtons(project);
    }
})

function updateButtons(object) {
    if(object.type === PROJECT) {
        document.getElementById(object.id + '_delete').addEventListener("click", ()=> {
            FactoryManager.deleteObject(object.id);
            DomManager.deleteDOM(object.id);
        })
        document.getElementById(object.id + '_modify').addEventListener("click", ()=> {
            FactoryManager.updateObject(object, DomManager.getObjectData(PROJECT));
            DomManager.modifyDOM(object);
            DomManager.renderDOM(object);
        })
        document.getElementById(object.id + '_add').addEventListener("click", ()=> {
            let todo = FactoryManager.createObject(DomManager.getObjectData(TODO));
            project.createTodo(todo);
        })
        document.getElementById(object.id + "_render").addEventListener("click", ()=> {
            DomManager.renderDOM(object);
        })
    }
}

function createDummyProject(data) {
    let dummyProject = FactoryManager.createObject(data);
    DomManager.newDOM(dummyProject);
    updateButtons(dummyProject);
    DomManager.renderDOM(dummyProject);
}