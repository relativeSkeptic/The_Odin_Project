import { Gameboard } from './gameboard';
import { Ship } from './ship';

test('Ensures coordinates are validated correctly', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([3,8]);
    expect(gameboard.attackCoord.has("3,8"));
});

test('Ensures proper error handling of invalid coordinates', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([52,7]);
        expect(gameboard.receiveAttack([52,7])).toEqual({
                result: "error",
                message: "Coordinates are not valid.",
                coord: [52,7]
            });
});

test('Checks duplicate attacks on the same location', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([1,1]);
    expect(gameboard.receiveAttack([1,1])).toEqual({
                result: "warning",
                message: "Coordinate has already been hit.",
                coord: [1,1]
            });
});

test('Validate hit detection when a shot misses a ship', () => {
    let gameboard = new Gameboard();
    expect(gameboard.receiveAttack([4,9])).toEqual({
                result: "miss",
                message: "Shot missed.",
                coord: [4,9]
            });
});

test('Validate hit detection when a shot hits a ship', () => {

});

test('Validate startCoord when placing ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([4,15], [4,9], ship)).toEqual({
                result: "error",
                message: "Start coordinates are not valid.",
                coord: [4,15]
            });
});

test('Validate endCoord when placing ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([4,5], [4,19], ship)).toEqual({
                result: "error",
                message: "End coordinates are not valid.",
                coord: [4,19]
            });
});

test('Validate coordinates are in a straight line when placing ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([1,1], [2,5], ship)).toEqual({
                result: "error",
                message: "Coordinates are not in a straight line.",
                coord: [[1,1], [2,5]]
            });
});

test('Ensure ship length and coordinates are properly validated', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([1,1], [1,5], ship)).toEqual({
                result: "error",
                message: "Ship length does not match the number of coordinates provided.",
                coord: [[1,1], [1,5]]
            });
});

test('Ensure ships cannot overlap coordinates', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(4);
    let ship2 = new Ship(5);
    gameboard.placeShip([1,1], [1,4], ship1);

    expect(gameboard.placeShip([1,1], [1,5], ship2)).toEqual({
                result: "error",
                message: "Coordinate is already in use.",
                coord: [1,1]
            });
});

test('Test for successful placement of a ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([1,1], [1,4], ship)).toEqual({
                result: "success",
                message: "Ship was successfully placed.",
                coord: [[1,1],[1,4]]
            });
});

test('Verify individual ships can individually be accessed', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    gameboard.placeShip([1,1], [1,4], ship)
    expect(gameboard.getShip([1, 1])).toBe(ship);

    //Checks for invalid coordinates that the function returns null correctly
    expect(gameboard.getShip([1, 8])).toBe(null);
});

test('Ensure attackCoord returns all possible values', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([5,8]);
    gameboard.receiveAttack([3,2]);
    gameboard.receiveAttack([1,7]);
    expect(gameboard.attackCoord.has("5,8")).toBe(true);
    expect(gameboard.attackCoord.has("3,2")).toBe(true);
    expect(gameboard.attackCoord.has("1,7")).toBe(true);
});

test('Ensure shipPositions returns all possible values', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(2);
    let ship2 = new Ship(3);
    let ship3 = new Ship(4);
    gameboard.placeShip([1,1], [1,2], ship1);
    gameboard.placeShip([2,1], [2,3], ship2);
    gameboard.placeShip([3,1], [3,4], ship3);
    expect(gameboard.shipPositions.has("1,1")).toBe(true);
    expect(gameboard.shipPositions.has("2,2")).toBe(true);
    expect(gameboard.shipPositions.has("3,3")).toBe(true);

    //Check to ensure that the function returns false correctly as well
    expect(gameboard.shipPositions.has("4,4")).toBe(false);
});

test('Ensure ships returns all possible values', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(2);
    let ship2 = new Ship(3);
    let ship3 = new Ship(4);
    let ship4 = new Ship(5);
    gameboard.placeShip([1,1], [1,2], ship1);
    gameboard.placeShip([2,1], [2,3], ship2);
    gameboard.placeShip([3,1], [3,4], ship3);
    expect(gameboard.ships.has(ship1)).toBe(true);
    expect(gameboard.ships.has(ship2)).toBe(true);
    expect(gameboard.ships.has(ship3)).toBe(true);

    //Check to ensure that the function returns false correctly as well
    expect(gameboard.shipPositions.has(ship4)).toBe(false);
});

test('Ensure clearGameboard properly removes all data', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(2);
    gameboard.placeShip([1,1], [1,2], ship1);
    gameboard.receiveAttack([1,5]);
    expect(gameboard.ships.has(ship1)).toBe(true);
    expect(gameboard.shipPositions.has("1,1")).toBe(true);
    expect(gameboard.attackCoord.has("1,5")).toBe(true);

    gameboard.clearBoard();

    expect(gameboard.ships.has(ship1)).toBe(false);
    expect(gameboard.shipPositions.has("1,1")).toBe(false);
    expect(gameboard.attackCoord.has("1,5")).toBe(false);
});