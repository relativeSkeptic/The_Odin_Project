import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';

export const Types = Object.freeze({
    PROJECT: "project",
    TODO: "todo"
});

let projectButton = document.getElementById('new-project');

projectButton.addEventListener("click", () => {
    FactoryManager.createObject(PROJECT, DomManager.getObjectData(PROJECT));
})