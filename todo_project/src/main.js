import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';

const PROJECT = 'project';

let projectButton = document.getElementById('new-project');

projectButton.addEventListener("click", () => {
    let project = FactoryManager.createObject(DomManager.getObjectData(PROJECT));
    DomManager.newDOM(project);
    document.getElementById(project.id + '_delete').addEventListener("click", ()=> {
        FactoryManager.deleteObject(project);
        DomManager.deleteDOM(project.id);
    })
    document.getElementById(project.id + '_modify').addEventListener("click", ()=> {
        FactoryManager.updateObject(project, DomManager.getObjectData(PROJECT));
        DomManager.modifyDOM(project);
    })
})