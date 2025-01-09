//handles the creation, deletion, and modification of a todo object

class todo {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    //getters
    get name() {
        return this.name;
    }

    get description() {
        return this.description;
    }

    get dueDate() {
        return this.dueDate;
    }

    get priority() {
        return this.priority;
    }

    //setters
    set name(name) {
        this.name = name;
    }

    set description(description) {
        this.description = description;
    }

    set dueDate(dueDate) {
        this.dueDate = dueDate;
    }

    set priority(priority) {
        this.priority = priority;
    }
}