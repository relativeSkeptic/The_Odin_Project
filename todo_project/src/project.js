//class structure that handles project objects

class Project {
    constructor(name) {
        this._name = name;
        this._todo = new Map();
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get allTodo() {
        return this._todo;
    }

    getSpecificTodo(name) {
        return this._todo.get(name);
    }

    createTodo(todo) {
        this._todo.set(todo.name, todo);
    }

    deleteTodo(name) {
        this._todo.delete(name);
    }
}

export default Project;