import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';

export const TYPES = Object.freeze({
    PROJECT: "project",
    TODO: "todo"
});

let projectButton = document.getElementById('new-project');

projectButton.addEventListener("click", () => {
    let project = FactoryManager.createObject(TYPES.PROJECT, DomManager.getObjectData(TYPES.PROJECT));
    DomManager.modifyDOM(TYPES.PROJECT, project);
    document.getElementById(project.id + '_delete').addEventListener("click", ()=> {
        FactoryManager.deleteObject(TYPES.PROJECT, project);
        DomManager.deleteDOM(project.id);
    })
    document.getElementById(project.id + '_modify').addEventListener("click", ()=> {
        alert('modify');
    })
})