import "./styles.css";
import { GameDriver } from "./driver"
import { UserInterface } from "./userInterface"

let gameDriver = new GameDriver();
let UI = new UserInterface(gameDriver);