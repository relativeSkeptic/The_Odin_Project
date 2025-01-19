//class structure that handles todo objects

class Todo {
    constructor(name, id, description, dueDate, priority) {
        this._name = name;
        this._id = id;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._type = "todo";
    }

    //getters
    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    get type() {
        return this._type;
    }

    //setters
    set name(name) {
        this._name = name;
    }

    set id(id) {
        this._id = id;
    }

    set description(description) {
        this._description = description;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    set priority(priority) {
        this._priority = priority;
    }
}

export default Todo;