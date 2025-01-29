import "./styles.css";
import { addDropDownEventListener } from "./dropdown.js";

let dropDownMenu = document.getElementById('dropDownMenu');
dropDownMenu.className = 'dropdown-menu';
let dropDownContent = document.getElementById('dropDownContent');
addDropDownEventListener(dropDownMenu, dropDownContent);