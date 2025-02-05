import "./styles.css";
import { addDropDownEventListener } from "./dropdown";
import { carouselRight, carouselLeft, updateImage } from "./image-carousel"


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

let carouselButtons = document.getElementsByClassName('dot');
for (let i = 0; i < carouselButtons.length; i++) {
    carouselButtons[i].addEventListener('click', ()=> {
        updateImage(i);
    });
}
