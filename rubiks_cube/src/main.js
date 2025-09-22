import "./styles.css";

//Current rotation in degrees
let currentRotation = 0;

//Obtain a list of all squares
const squares = document.querySelectorAll('.square');

function rotateSquare() {
    currentRotation += 1;
    for (let square of squares) {
        square.style.transform = `rotate(${currentRotation}deg)`;
    }
    if (currentRotation === 360) {
        currentRotation = 0;
    }
}

let interval = setInterval(rotateSquare, 1);