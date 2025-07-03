import { knightMoves } from "./main";

let startPos = [0, 0];
let endPos = [7, 7];

let moves = knightMoves(startPos, endPos);

console.log(moves);

startPos = [3, 5];
endPos = [2, 2];

moves = knightMoves(startPos, endPos);

console.log(moves);

startPos = [1, 4];
endPos = [6, 2];

moves = knightMoves(startPos, endPos);

console.log(moves);