import './styles.css';
import DomManager from './dom.js';

let projectButton = document.getElementById('new-project');

projectButton.addEventListener("click", () => {
    DomManager.createObject('project');
})