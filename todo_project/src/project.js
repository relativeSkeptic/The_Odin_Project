//handles the creation, deletion, and modification of a project object

class project{
    constructor(name) {
        this.name = name;
    }

    //getters
    get name() {
        return this.name;
    }

    //setters
    set name(name) {
        this.name = name;
    }
}