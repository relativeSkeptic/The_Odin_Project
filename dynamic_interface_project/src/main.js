import "./styles.css";
import { addDropDownEventListener } from "./dropdown";
import { carouselRight, carouselLeft } from "./image-carousel"


let dropDownMenu = document.getElementById('dropDownMenu');
dropDownMenu.className = 'dropdown-menu';
let dropDownContent = document.getElementById('dropDownContent');
addDropDownEventListener(dropDownMenu, dropDownContent);

let rightButton = document.getElementById('rightButton');
let leftButton = document.getElementById('leftButton');

rightButton.addEventListener('click', () => {
    carouselRight();
});

leftButton.addEventListener('click', () => {
    carouselLeft();
});

