import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';
import { dummyProject } from './dummy.js';
import { todoMap } from './dummy.js';

const PROJECT = 'project';
const TODO = 'todo';
const NEW = 'new';
const SETTINGS = 'settings';

//creating a dummy object for testing
//and implementation
createDummyProject(dummyProject, todoMap);

//new project button functionality
document.getElementById('new-project').addEventListener("click", () => {
    DomManager.displayProjectModal(NEW);
})

//modal button functionality
document.getElementById('projectHero').addEventListener("click", ()=> {
    DomManager.displayProjectModal(SETTINGS);
});

document.getElementById('closeProjectSettings').addEventListener("click", ()=> {
    DomManager.closeProjectModal(SETTINGS);
});

document.getElementById('closeNewProject').addEventListener("click", ()=> {
    DomManager.closeProjectModal(NEW);
});

document.getElementById('projectSettingsDelete').addEventListener("click", ()=> {
    let project = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
    FactoryManager.deleteObject(project);
    DomManager.deleteDOM(project);
    DomManager.closeProjectModal(SETTINGS);
});

document.getElementById('newProjectSubmit').addEventListener("click", ()=> {
    let projectText = document.getElementById('newProjectInput');
    console.log(projectText);
    if(projectText.value != "" && projectText.value != null) {
        let projectMap = new Map();
        projectMap.set('type', PROJECT);
        projectMap.set('name', projectText.value);
        let project = FactoryManager.createObject(projectMap);
        FactoryManager.setCurrentProjectID = project.id;
        DomManager.renderDOM(project);
        document.getElementById(project.id + "_select_project_button").addEventListener("click", ()=> {
            FactoryManager.setCurrentProjectID = project.id;
            DomManager.renderDOM(project);
        });
        DomManager.closeProjectModal(NEW);
    }
});

document.getElementById('projectSettingsSubmit').addEventListener("click", ()=> {
    let project = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
    let projectText = document.getElementById('projectSettingsInput');
    if(projectText.value != "" && projectText.value != null) {
        FactoryManager.updateObject(project, projectText.value);
        FactoryManager.setCurrentProjectID = project.id;
        DomManager.renderDOM(project);
        document.getElementById(project.id + "_select_project_button").addEventListener("click", ()=> {
            FactoryManager.setCurrentProjectID = project.id;
            DomManager.renderDOM(project);
        });
        DomManager.closeProjectModal(SETTINGS);
    }
});

//creates a dummy class for testing and 
//initial implementation
function createDummyProject(project, todo) {
    let dummyProject = FactoryManager.createObject(project);
    for(const value of todo.values()) {
        let newTodo = FactoryManager.createObject(value);
        dummyProject.createTodo(newTodo);
    }
    FactoryManager.setCurrentProjectID = dummyProject.id;
    DomManager.renderDOM(dummyProject);
    document.getElementById(dummyProject.id + "_select_project_button").addEventListener("click", ()=> {
        FactoryManager.setCurrentProjectID = project.id;
        DomManager.renderDOM(dummyProject);
    });
}