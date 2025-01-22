import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';
import { dummyProject } from './dummy.js';
import { todoMap } from './dummy.js';

const PROJECT = 'project';
const TODO = 'todo';

//creating a dummy object for testing
//and implementation
createDummyProject(dummyProject, todoMap);

//new project button functionality
document.getElementById('new-project').addEventListener("click", () => {
    let project = FactoryManager.createObject(DomManager.getObjectData(PROJECT));
    if(project.name != "" && project.name != null) {
        FactoryManager.setCurrentProjectID = project.id;
        DomManager.renderDOM(project);
        document.getElementById(project.id + "_select_project_button").addEventListener("click", ()=> {
            FactoryManager.setCurrentProjectID = project.id;
            DomManager.renderDOM(project);
        });
    }
})

//modal button functionality
document.getElementById('projectHero').addEventListener("click", ()=> {
    DomManager.displayProjectModal();
});

document.getElementById('closeButton').addEventListener("click", ()=> {
    DomManager.closeProjectModal();
});

document.getElementById('projectDeleteButton').addEventListener("click", ()=> {
    let project = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
    FactoryManager.deleteObject(project);
    DomManager.deleteDOM(project);
    DomManager.closeProjectModal();
});

document.getElementById('projectSubmitButton').addEventListener("click", ()=> {
    let project = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
    let projectText = document.getElementById('projectInput');
    if(projectText.value != "" && projectText.value != null) {
        FactoryManager.updateObject(project, projectText.value);
        DomManager.renderDOM(project);
        DomManager.closeProjectModal();
    }
});

document.getElementById('projectNewTodoButton').addEventListener("click", ()=> {
    alert('todo');
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