import "./styles.css";

const possibleMoves = [
    [+2, +1], [+1, +2],
    [-1, +2], [-2, +1],
    [-2, -1], [-1, -2],
    [+1, -2], [+2, -1]
];

export function knightMoves(startPos, endPos) {
    //Creating a queue which will contain all paths we need to explore
    let queue = [[startPos, [startPos]]];

    //Set used to store visited squares
    let visited = new Set();
    visited.add(startPos.toString());

    //Begin looping through the queue checking each subpath as we go
    //This will dynamically grow the queue to add additional paths to take
    for(let i = 0; i < queue.length; i++) {

        //Extract values needed from the queue
        let [currentPos, path] = queue[i];

        //Check to see if we have reached the endPos
        if(currentPos[0] === endPos[0] && currentPos[1] === endPos[1]) {
            return path;
        }

        //If we haven't reached the endPos yet then loop through all possible legal moves 
        //adding all legal moves to the queue to be validated as well
        for(const moves of possibleMoves) {
            //New move to add to queue
            let newX = currentPos[0] + moves[0];
            let newY = currentPos[1] + moves[1];

            //Check to ensure the move is valid
            if(newX < 0 || newX > 7 || newY < 0 || newY > 7) {
                continue;
            }

            //Check to ensure we have not already visited that square in our queue
            let newPos = [newX, newY];
            let key = newPos.toString();

            //We have not visited this square so add it to the set and push it into our queue
            if(!visited.has(key)) {
                visited.add(key);
                queue.push([newPos, [...path, newPos]]);
            }
        }
    }
}