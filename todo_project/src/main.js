import './styles.css';
import { createProject } from './dom.js'

let projectButton = document.getElementById('new-project');

projectButton.addEventListener("click", () => {
    //call some external function that handles the DOM manipulation
    //that function intakes needed data for the project
    //then creates a new project object

    createNewProject();
})