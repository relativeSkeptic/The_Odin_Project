import FactoryManager from "./factory";
import DomManager from "./dom";
import {
  closeProjectModal,
  closeTodoModal,
  displayProjectModal,
  displayTodoModal,
} from "./modals";

const NEW = "new";
const SETTINGS = "settings";
const PROJECT = "project";
const TODO = "todo";

function projectEventListeners() {
  document.getElementById("new-project").addEventListener("click", () => {
    displayProjectModal(NEW);
  });

  document.getElementById("projectHero").addEventListener("click", () => {
    displayProjectModal(SETTINGS);
  });

  document
    .getElementById("closeProjectSettings")
    .addEventListener("click", () => {
      closeProjectModal(SETTINGS);
    });

  document.getElementById("closeNewProject").addEventListener("click", () => {
    closeProjectModal(NEW);
  });

  document
    .getElementById("projectSettingsDelete")
    .addEventListener("click", () => {
      let project = FactoryManager.getObject(
        FactoryManager.getCurrentProjectID,
        PROJECT,
      );
      FactoryManager.deleteObject(project);
      DomManager.deleteDOM(project);
      closeProjectModal(SETTINGS);
    });
}

function todoEventListeners() {
  document.getElementById("closeTodoSettings").addEventListener("click", () => {
    closeTodoModal(SETTINGS);
  });

  document.getElementById("closeNewTodo").addEventListener("click", () => {
    closeTodoModal(NEW);
  });

  document
    .getElementById("todoSettingsDelete")
    .addEventListener("click", () => {
      let project = FactoryManager.getObject(
        FactoryManager.getCurrentProjectID,
        PROJECT,
      );
      let todo = FactoryManager.getObject(
        FactoryManager.getCurrentTodoID,
        TODO,
      );
      FactoryManager.deleteObject(todo);
      DomManager.deleteDOM(todo);
      project.deleteTodo(todo.id);
      closeTodoModal(SETTINGS);
    });
}

function addTodoDisplayListener(todo) {
  document.getElementById(todo.id).addEventListener("click", () => {
    FactoryManager.setCurrentTodoID = todo.id;
    displayTodoModal(SETTINGS);
  });
}

function addTodoEventListener(object) {
  document
    .getElementById(object.id + "_create_todo")
    .addEventListener("click", () => {
      displayTodoModal(NEW);
    });
}

export {
  projectEventListeners,
  todoEventListeners,
  addTodoDisplayListener,
  addTodoEventListener,
};
