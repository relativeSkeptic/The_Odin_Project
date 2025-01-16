//class structure that handles project objects

class Project {
    constructor(name, id) {
        this._name = name;
        this._id = id;
        this._type = 'project';
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

    get id() {
        return this._id;
    }

    get type() {
        return this._type;
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