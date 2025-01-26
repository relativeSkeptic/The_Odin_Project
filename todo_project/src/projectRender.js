//helper functions for the dom.js file to aide in rendering project objects

function projectRender(project) {
  let newProject = document.createElement("div");

  newProject.id = project.id;
  newProject.className = "project-container";

  updateHeroHeader(project);

  newProject.appendChild(projectButtons(project));
  document.getElementById("project-objects").appendChild(newProject);
}

function updateProject(project) {
  updateHeroHeader(project);
  updateSelectButton(project);
}

function updateHeroHeader(project) {
  document.getElementById("projectHero").textContent = project.name;
}

function projectButtons(project) {
  let projectButtons = document.createElement("div");
  projectButtons.id = project.id + "_project_buttons";
  projectButtons.className = "project-buttons";

  projectButtons.appendChild(selectProjectButton(project));

  return projectButtons;
}

function selectProjectButton(project) {
  let selectButton = document.createElement("button");
  selectButton.id = project.id + "_select_project_button";
  selectButton.className = "project-select-button";
  selectButton = selectButtonLength(selectButton, project);

  return selectButton;
}

function updateSelectButton(project) {
  let selectButton = document.getElementById(
    project.id + "_select_project_button",
  );
  selectButton = selectButtonLength(selectButton, project);
}

function selectButtonLength(button, project) {
  if (project.name.length <= 15) {
    button.textContent = project.name;
  } else {
    button.textContent = project.name.slice(0, 10) + "...";
  }

  return button;
}

export { projectRender, updateProject };
