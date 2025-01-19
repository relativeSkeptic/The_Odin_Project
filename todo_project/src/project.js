//class structure that handles project objects

class Project {
    constructor(name, id) {
        this._name = name;
        this._id = id;
        this._type = 'project';
        this._todo = new Map();
    }

    //getters
    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get type() {
        return this._type;
    }

    get allTodo() {
        return this._todo;
    }

    getSpecificTodo(id) {
        return this._todo.get(id);
    }

    //setters
    set name(name) {
        this._name = name;
    }

    //methods
    createTodo(todo) {
        this._todo.set(todo.id, todo);
    }

    modifyTodo(todo) {
        this._todo.set(todo.id, todo);
    }

    deleteTodo(todoID) {
        this._todo.delete(todoID);
    }
}

export default Project;