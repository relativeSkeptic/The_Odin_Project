//object factory used to aid the dom.js in creating the necessary dom objects

class ObjectFactory {
  static createManager(type) {
    switch (type) {
      case 'project':
        return new ProjectManager();
      case 'todo':
        return new TodoManager();
      default:
        throw new Error(`Unknown object type: ${type}`);
    }
  }
}

class ProjectManager {
    createObject() {
        let projectLocation = document.getElementById('project-objects');
        let newObject = document.createElement('button');
        
    }
}

class TodoManager {
    constructor() {
        
    }
}

export default ObjectFactory;