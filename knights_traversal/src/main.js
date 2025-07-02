import "./styles.css";

//Possible moves the knight can make stored in an array
let possibleMoves = [
  [+2, +1], [+1, +2],
  [-1, +2], [-2, +1],
  [-2, -1], [-1, -2],
  [+1, -2], [+2, -1]
];

function knightMoves(startPos, endPos) {
    let shortestPath = [];
    let currentPath = [];
    knightMovesHelper(startPos, endPos, shortestPath, currentPath);
    return shortestPath; 
}

function knightMovesHelper(startPos, endPos, short, curr) {
    if(startPos === endPos) {
        //Ensure that the shortest path is stored in the short array before returning
        if (short.length === 0 || curr.length < short.length) {
            short.length = 0;
            for (let position of curr) {
                short.push(position);
            }
        }
        return;
    }

    for(let nextMove of possibleMoves) {
        let nextX = startPos[0] + nextMove[0];
        let nextY = startPos[1] + nextMove[1];
    }
}