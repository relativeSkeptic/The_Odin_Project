//singleton that manipulates the entire dom for the todo application
import ObjectFactory from './factory.js';

class DOM {
    constructor() {
        if(DOM.instance) {
            return DOM.instance;
        }

        DOM.instance = this;
    }

    createObject(type) {
        const manager = ObjectFactory.createManager(type);
        manager.createObject();
    }

    modifyObject(object) {

    }

    deleteObject(object) {

    }
}

const DomManager = new DOM();
export default DomManager;