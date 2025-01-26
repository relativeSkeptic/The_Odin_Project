const NEW = 'new';
const SETTINGS = 'settings';

function displayProjectModal(type) {
    let projectModal = null;
    if(type === NEW) {
        projectModal = document.getElementById('newProjectModal');
    }
    else if(type === SETTINGS) {
        projectModal = document.getElementById('projectSettingsModal');
    }
    projectModal.style.display = "flex";

    window.onclick = function(event) {
        if (event.target == projectModal) {
          projectModal.style.display = "none";
        }
    }
}

function displayTodoModal(type) {
    let todoModal = null;
    if(type === NEW) {
        todoModal = document.getElementById('newTodoModal');
    }
    else if(type === SETTINGS) {
        todoModal = document.getElementById('todoSettingsModal');
    }
    todoModal.style.display = "flex";

    window.onclick = function(event) {
        if (event.target == todoModal) {
            todoModal.style.display = "none";
        }
    }
}

function closeProjectModal(type) {
    let projectModal = null;
    if(type === NEW) {
        projectModal = document.getElementById('newProjectModal');
    }
    else if(type === SETTINGS) {
        projectModal = document.getElementById('projectSettingsModal');
    }
    projectModal.style.display = "none";
}

function closeTodoModal(type) {
    let todoModal = null;
    if(type === NEW) {
        todoModal = document.getElementById('newTodoModal');
    }
    else if(type === SETTINGS) {
        todoModal = document.getElementById('todoSettingsModal');
    }
    todoModal.style.display = "none";
}

export { displayProjectModal, displayTodoModal, closeProjectModal, closeTodoModal };