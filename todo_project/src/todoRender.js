//helper functions for the dom.js file to aide in rendering todo objects

//single function that renders all of the necessary 
//todo date to the dom
function todoRender(todoObject) {
    let newTodo = document.createElement('button');

    newTodo.id = todoObject.id;
    newTodo.className = "todo-objects";

    newTodo.appendChild(todoHeader(todoObject));
    newTodo.appendChild(todoBody(todoObject));

    document.getElementById('todoContainer').appendChild(newTodo);
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