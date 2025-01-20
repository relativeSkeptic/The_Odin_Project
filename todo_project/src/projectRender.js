//helper functions for the dom.js file to aide in rendering project objects

function projectRender(project) {

}

//prompts the user for the necessary project data
//for project object creation
function projectPrompt() {
    let projectMap = new Map();
    projectMap.set('type', 'project');

    let projectName = prompt("What is the name of your Project?");
    projectMap.set('name', projectName);

    return projectMap;
}

export { projectRender, projectPrompt };