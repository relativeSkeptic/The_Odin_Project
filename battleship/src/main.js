import "./styles.css";
import { Player } from "./player"
import { Computer } from "./computer"
import { UserInterface } from "./userInterface"

let UI = new UserInterface();
UI.generateBoards();

let player = new Player();
let computer = new Computer();

console.log(player.gameboard);
console.log(computer.gameboard);