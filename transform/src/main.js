import "./styles.css";
import { rotate } from "./transform";

const MAX_RANGE = 180;
const MIN_RANGE = -180;

let newXRotation = 0;
let newYRotation = 0;
let newZRotation = 0;
let intervalId;

let square = document.getElementById("square");

function loadEventListeners() {
  rotate.xAxis.addEventListener("input", function () {
    rotate.xAxisDegrees.textContent = rotate.xAxis.value;
    square.style.transform =
      `rotateX(${rotate.xAxis.value}deg)` +
      `rotateY(${rotate.yAxis.value}deg)` +
      `rotateZ(${rotate.zAxis.value}deg)`;
  });

  rotate.yAxis.addEventListener("input", function () {
    rotate.yAxisDegrees.textContent = rotate.yAxis.value;
    square.style.transform =
      `rotateX(${rotate.xAxis.value}deg)` +
      `rotateY(${rotate.yAxis.value}deg)` +
      `rotateZ(${rotate.zAxis.value}deg)`;
  });

  rotate.zAxis.addEventListener("input", function () {
    rotate.zAxisDegrees.textContent = rotate.zAxis.value;
    square.style.transform =
      `rotateX(${rotate.xAxis.value}deg)` +
      `rotateY(${rotate.yAxis.value}deg)` +
      `rotateZ(${rotate.zAxis.value}deg)`;
  });
}

function randomizeRotation() {
  square.style.transform =
    `rotateX(${(newXRotation += 1)}deg)` +
    `rotateY(${(newYRotation += 1)}deg)` +
    `rotateZ(${(newZRotation += 1)}deg)`;
}

document
  .getElementById("randomizeRotation")
  .addEventListener("change", function () {
    if (this.checked) {
      intervalId = setInterval(randomizeRotation(), 10);
    } else {
      clearInterval(intervalId);
    }
    intervalId = setInterval(randomizeRotation, 10);
  });

loadEventListeners();
