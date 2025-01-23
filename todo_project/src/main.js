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

document.getElementById('closeTodoSettings').addEventListener("click", ()=> {
    DomManager.closeTodoModal(SETTINGS);
});

document.getElementById('closeNewTodo').addEventListener("click", ()=> {
    DomManager.closeTodoModal(NEW);
});

document.getElementById('projectSettingsDelete').addEventListener("click", ()=> {
    let project = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
    FactoryManager.deleteObject(project);
    DomManager.deleteDOM(project);
    DomManager.closeProjectModal(SETTINGS);
});

document.getElementById('todoSettingsDelete').addEventListener("click", ()=> {
    let todo = FactoryManager.getObject(FactoryManager.getCurrentTodoID, TODO);
    FactoryManager.deleteObject(todo);
    DomManager.deleteDOM(todo);
    DomManager.closeTodoModal(SETTINGS);
});

document.getElementById('newProjectSubmit').addEventListener("click", ()=> {
    let projectText = document.getElementById('newProjectInput');
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

document.getElementById('newTodoSubmit').addEventListener("click", ()=> {
    let todoText = document.getElementById('newTodoInput').value;
    let todoDescription = document.getElementById('newTodoDescription').value;
    let todoDueDate = document.getElementById('newTodoDueDate').value;
    let todoPriority = document.getElementById('newTodoPriority').value;

    if(todoText != "" && todoText != null) {
        let todoMap = new Map();
        todoMap.set('type', TODO);
        todoMap.set('name', todoText);
        todoMap.set('description', todoDescription);
        todoMap.set('dueDate', todoDueDate);
        todoMap.set('priority', todoPriority);

        let todo = FactoryManager.createObject(todoMap);
        let currentProject = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
        currentProject.createTodo(todo);
        FactoryManager.setCurrentProjectID = currentProject.id;
        DomManager.renderDOM(currentProject);
        DomManager.closeTodoModal(NEW);
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
    for(const todo of dummyProject.allTodo) {
        document.getElementById(todo[1].id).addEventListener("click", ()=> {
            FactoryManager.setCurrentTodoID = todo[1].id;
            DomManager.displayTodoModal(SETTINGS);
        })
    }
    document.getElementById(dummyProject.id + "_select_project_button").addEventListener("click", ()=> {
        FactoryManager.setCurrentProjectID = dummyProject.id;
        DomManager.renderDOM(dummyProject);
    });
    document.getElementById(dummyProject.id + "_create_todo").addEventListener("click", ()=> {
        DomManager.displayTodoModal(NEW);
    });
}