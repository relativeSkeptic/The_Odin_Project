import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';

export const TYPES = Object.freeze({
    PROJECT: "project",
    TODO: "todo"
});

let projectButton = document.getElementById('new-project');

projectButton.addEventListener("click", () => {
    FactoryManager.createObject(TYPES.PROJECT, DomManager.getObjectData(TYPES.PROJECT));
})