import "./styles.css";
import { rotate } from "./transform";

let square = document.getElementById("square");

function loadEventListeners() {
  rotate.xAxis.addEventListener("input", function () {
    rotate.xAxisDegrees.textContent = rotate.xAxis.value;
    square.style.transform = `rotateX(${rotate.xAxis.value}deg)`;
  });

  rotate.yAxis.addEventListener("input", function () {
    rotate.yAxisDegrees.textContent = rotate.yAxis.value;
    square.style.transform = `rotateY(${rotate.yAxis.value}deg)`;
  });

  rotate.zAxis.addEventListener("input", function () {
    rotate.zAxisDegrees.textContent = rotate.zAxis.value;
    square.style.transform = `rotateZ(${rotate.zAxis.value}deg)`;
  });
}

loadEventListeners();
