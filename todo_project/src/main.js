import './styles.css';
import DomManager from './dom.js';
import FactoryManager from './factory.js';
import { dummyProject } from './dummy.js';
import { todoMap } from './dummy.js';
import { projectEventListeners, todoEventListeners } from './eventListeners.js';
import { closeProjectModal, closeTodoModal } from './modals.js';

const PROJECT = 'project';
const TODO = 'todo';
const NEW = 'new';
const SETTINGS = 'settings';

projectEventListeners();
todoEventListeners();

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

        closeProjectModal(NEW);
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
        closeTodoModal(NEW);
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
        closeProjectModal(SETTINGS);
    }
});

document.getElementById('todoSettingsSubmit').addEventListener("click", ()=> {
    let todo = FactoryManager.getObject(FactoryManager.getCurrentTodoID, TODO);
    let todoText = document.getElementById('todoSettingsInput').value;
    if(todoText != null && todoText != "") {
        let todoDescription = document.getElementById('settingsTodoDescription').value;
        let todoDueDate = document.getElementById('settingsTodoDueDate').value;
        let todoPriority = document.getElementById('settingsTodoPriority').value;
    
        let todoMap = new Map();
        todoMap.set('type', TODO);
        todoMap.set('name', todoText);
        todoMap.set('description', todoDescription);
        todoMap.set('dueDate', todoDueDate);
        todoMap.set('priority', todoPriority);

        let project = FactoryManager.getObject(FactoryManager.getCurrentProjectID, PROJECT);
        FactoryManager.updateObject(todo, todoMap);
        project.modifyTodo(todo.id, todo);
        DomManager.renderDOM(project);
        closeTodoModal(SETTINGS);
    }
});

//creating a dummy object for testing
//and implementation
createDummyProject(dummyProject, todoMap);

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
        FactoryManager.setCurrentProjectID = dummyProject.id;
        DomManager.renderDOM(dummyProject);
    });
}