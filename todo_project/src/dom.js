//singleton that manipulates the entire dom for the todo application

import { TYPES } from "./main.js";

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
    }

    //public
    getObjectData(type) {
        if(type === TYPES.PROJECT) {
            return this.#newProject();
        }
    }

    modifyObject(object) {

    }

    deleteObject(object) {

    }

    //private

    //manipulates the dom in order to get the 
    //necessary project data from the user
    #newProject() {
        let projectMap = new Map();

        let projectName = prompt("What is the name of your new Project?");
        projectMap.set('name', projectName);

        return projectMap;
    }
}

const DomManager = new DOM();
export default DomManager;