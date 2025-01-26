import "./styles.css";
import { homePage } from "./home.js";
import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";

let content = document.getElementById("content");
content.appendChild(homePage);

const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const menuButton = document.getElementById("menuButton");
const linkedinButton = document.getElementById("linkedin");
const githubButton = document.getElementById("github");

homeButton.addEventListener("click", () => {
  content.removeChild(content.firstChild);
  content.appendChild(homePage);
});

menuButton.addEventListener("click", () => {
  content.removeChild(content.firstChild);
  content.appendChild(menuPage);
});

aboutButton.addEventListener("click", () => {
  content.removeChild(content.firstChild);
  content.appendChild(aboutPage);
});

linkedinButton.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/strdak97", "_blank");
});

githubButton.addEventListener("click", () => {
  window.open("https://github.com/relativeSkeptic", "_blank");
});
