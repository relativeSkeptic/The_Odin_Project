import './styles.css';
import { homePage } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

let page = document.getElementById('content');
page.appendChild(homePage);
console.log(about);
console.log(menu);
console.log("Hello from Main");