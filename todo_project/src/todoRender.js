//helper functions for the dom.js file to aide in rendering todo objects

import pencilSrc from "../icons/pencil.svg";
import trashCanSrc from "../icons/trash_can.svg";
import prioritySrc from "../icons/star.svg";

//single function that renders all of the necessary 
//todo date to the dom
function todoRender(newTodo, todoObject) {
    newTodo.appendChild(todoHeader(todoObject));
    newTodo.appendChild(todoBody(todoObject));
    newTodo.appendChild(todoButtons(todoObject));
}

//renders the header of the todo which
//just consists of the name of the todo item
function todoHeader(todoObject) {
    let todoHeader = document.createElement('p');
    todoHeader.textContent = "Task: " + todoObject.name;
    todoHeader.id = todoObject.id + "_header";
    todoHeader.className = "todo-header";

    return todoHeader;
}

//renders the body of the todo item which
//consists of the description, due date, and
//priority
function todoBody(todoObject) {
    let todoBody = document.createElement('div');
    todoBody.id = todoObject.id + "_body";
    todoBody.className = "todo-body";

    todoBody.appendChild(todoDescription(todoObject));
    todoBody.appendChild(todoDate(todoObject));
    todoBody.appendChild(todoPriority(todoObject));

    return todoBody;
}

//renders the todo description to the body
//of the todo element
function todoDescription(todoObject) {
    let todoDescription = document.createElement('p');
    todoDescription.textContent = "Description: " + todoObject.description;
    todoDescription.id = todoObject.id + "_description";
    todoDescription.className = "todo-description";

    return todoDescription;
}

//renders the todo date to the body
//of the todo element
function todoDate(todoObject) {
    let todoDate = document.createElement('p');
    todoDate.textContent = "Due Date: " + todoObject.dueDate;
    todoDate.id = todoObject.id + "_dueDate";
    todoDate.className = "todo-dueDate";

    return todoDate;
}

//renders the todo priority to the body
//of the todo element
function todoPriority(todoObject) {
    let todoPriority = document.createElement('p');
    todoPriority.textContent = "Priority: " + todoObject.priority;
    todoPriority.id = todoObject.id + "_priority";
    todoPriority.className = "todo-priority";

    return todoPriority;
}

//renders the modify and delete buttons 
//to the todo element
function todoButtons(todoObject) {
    let todoButtons = document.createElement('div');
    todoButtons.id = todoObject.id + "_buttons";
    todoButtons.className = "todo-buttons";

    todoButtons.appendChild(modifyButton(todoObject));
    todoButtons.appendChild(deleteButton(todoObject));
    todoButtons.appendChild(priorityButton(todoObject));

    return todoButtons;
}

function modifyButton(todoObject) {
    let modifyButton = document.createElement('div');
    modifyButton.id = todoObject.id + "_todo_modify";
    modifyButton.className = "todo-modify";
    modifyButton.appendChild(appendButton('modify'));

    return modifyButton;
}

function deleteButton(todoObject) {
    let deleteButton = document.createElement('div');
    deleteButton.id = todoObject.id + "_todo_delete";
    deleteButton.className = "todo-delete";
    deleteButton.appendChild(appendButton('delete'));

    return deleteButton;
}

function priorityButton(todoObject) {
    let priorityButton = document.createElement('div');
    priorityButton.id = todoObject.id + "_todo_priority";
    priorityButton.className = "todo-priority";
    priorityButton.appendChild(appendButton('priority'));

    return priorityButton;
}

function appendButton(type) {
    let newButton = document.createElement('button');
    let image = document.createElement('img');

    if(type === 'modify') {
        image.src = pencilSrc;
    }
    else if(type === 'delete') {
        image.src = trashCanSrc;
    }
    else if(type === 'priority') {
        image.src = prioritySrc;
    }
    else {
        throw new error('Invalid Type provided');
    }

    newButton.appendChild(image);
    return newButton;
}

//prompts the user for the necessary todo data
//for todo object creation
function todoPrompt() {
    let todoMap = new Map();
    todoMap.set('type', 'todo');

    let name = prompt('What is the name of your task?');
    let description = prompt('Describe the task to be completed: ');
    let dueDate = prompt('When is the task due?');
    let priority = prompt('Is this a high priority item?');

    todoMap.set('name', name);
    todoMap.set('description', description);
    todoMap.set('dueDate', dueDate);
    todoMap.set('priority', priority);

    return todoMap;
}

export { todoRender, todoPrompt };