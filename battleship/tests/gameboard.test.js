import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';

//
// ─── Gameboard.receiveAttack() ───────────────────────────────────────────────
//

test('Validate proper error handling of invalid coordinates', () => {
    let gameboard = new Gameboard();
    expect(gameboard.receiveAttack([52, 7])).toEqual({
        result: "error",
        message: "Coordinates are not valid.",
        coord: [52, 7]
    });
});

test('Validate hit detection when a shot misses a ship (no ships placed)', () => {
    let gameboard = new Gameboard();
    expect(gameboard.receiveAttack([4, 9])).toEqual({
        result: "miss",
        message: "Shot missed.",
        coord: [4, 9]
    });
});

test('Validate hit detection when a shot hits a ship', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip([1, 1], [1, 2], ship);

    const attackResult = gameboard.receiveAttack([1, 1]);
    expect(attackResult.result).toBe("hit");
    expect(attackResult.message).toBe("Ship has been hit.");
});

test('Validate hit detection when a shot misses a ship (after placing a ship)', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip([1, 1], [1, 2], ship);

    const attackResult = gameboard.receiveAttack([2, 2]);
    expect(attackResult.result).toBe("miss");
    expect(attackResult.message).toBe("Shot missed.");
});

test('Ensure duplicate attacks on the same coordinate cannot occur', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([1, 1]);
    expect(gameboard.receiveAttack([1, 1])).toEqual({
        result: "warning",
        message: "Coordinate has already been hit.",
        coord: [1, 1]
    });
});

test('Ensure attackCoord returns all possible values', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([5, 8]);
    gameboard.receiveAttack([3, 2]);
    gameboard.receiveAttack([1, 7]);
    expect(gameboard.attackCoord.has("5,8")).toBe(true);
    expect(gameboard.attackCoord.has("3,2")).toBe(true);
    expect(gameboard.attackCoord.has("1,7")).toBe(true);
});

test('Ensures coordinates are validated correctly', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack([3, 8]);
    expect(gameboard.attackCoord.has("3,8")).toBe(true);
});

test('Attacking after clearing board behaves as if empty', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(2);
    gameboard.placeShip([1, 1], [1, 2], ship);
    gameboard.clearBoard();

    const result = gameboard.receiveAttack([1, 1]);
    expect(result.result).toBe("miss");
    expect(result.message).toBe("Shot missed.");
});

test('receiveAttack returns "sunk" when the last hit sinks the ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(2);
    gameboard.placeShip([4, 4], [4, 5], ship);

    gameboard.receiveAttack([4, 4]); // first hit
    const result = gameboard.receiveAttack([4, 5]); // should sink

    expect(result.result).toBe("sunk");
    expect(result.message).toBe("Ship has been sunk.");
});

//
// ─── Gameboard.placeShip() ───────────────────────────────────────────────────
//

test('Validate startCoord when placing ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([4, 15], [4, 9], ship)).toEqual({
        result: "error",
        message: "Start coordinates are not valid.",
        coord: [4, 15]
    });
});

test('Validate endCoord when placing ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([4, 5], [4, 19], ship)).toEqual({
        result: "error",
        message: "End coordinates are not valid.",
        coord: [4, 19]
    });
});

test('Validate coordinates are in a straight line when placing ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([1, 1], [2, 5], ship)).toEqual({
        result: "error",
        message: "Coordinates are not in a straight line.",
        coord: [[1, 1], [2, 5]]
    });
});

test('Validate ship length and coordinates', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([1, 1], [1, 5], ship)).toEqual({
        result: "error",
        message: "Ship length does not match the number of coordinates provided.",
        coord: [[1, 1], [1, 5]]
    });
});

test('Validate successful placement of a ship', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    expect(gameboard.placeShip([1, 1], [1, 4], ship)).toEqual({
        result: "success",
        message: "Ship was successfully placed.",
        coord: [[1, 1], [1, 4]]
    });
});

test('Ensure ships cannot overlap coordinates', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(4);
    let ship2 = new Ship(5);
    gameboard.placeShip([1, 1], [1, 4], ship1);
    expect(gameboard.placeShip([1, 1], [1, 5], ship2)).toEqual({
        result: "error",
        message: "Coordinate is already in use.",
        coord: [1, 1]
    });
});

test('Ensure partial ship overlap is detected', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(3);
    let ship2 = new Ship(4);

    gameboard.placeShip([1, 1], [1, 3], ship1);
    expect(gameboard.placeShip([1, 2], [1, 5], ship2)).toEqual({
        result: "error",
        message: "Coordinate is already in use.",
        coord: [1, 2]
    });
});

test('Full overlap with existing ship is rejected', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(3);
    let ship2 = new Ship(3);
    gameboard.placeShip([2, 2], [2, 4], ship1);

    const result = gameboard.placeShip([2, 2], [2, 4], ship2);
    expect(result.result).toBe("error");
});

test('Place ship at the edge of the board (bottom-right corner)', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(2);
    expect(gameboard.placeShip([9, 8], [9, 9], ship)).toEqual({
        result: "success",
        message: "Ship was successfully placed.",
        coord: [[9, 8], [9, 9]]
    });
});

test('Ships can be placed from higher to lower coordinates', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    const result = gameboard.placeShip([1, 4], [1, 1], ship);

    expect(result.result).toBe("success");
    expect(gameboard.shipPositions.has("1,1")).toBe(true);
    expect(gameboard.shipPositions.has("1,2")).toBe(true);
    expect(gameboard.shipPositions.has("1,3")).toBe(true);
    expect(gameboard.shipPositions.has("1,4")).toBe(true);
});

//
// ─── Gameboard.getShip() ─────────────────────────────────────────────────────
//

test('Validate individual ships can be accessed', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(4);
    gameboard.placeShip([1, 1], [1, 4], ship);

    expect(gameboard.getShip([1, 1])).toBe(ship);
    expect(gameboard.getShip([1, 8])).toBe(null);
});

//
// ─── Gameboard.shipPositions (getter) ─────────────────────────────────────────
//

test('Ensure shipPositions returns all possible values', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(2);
    let ship2 = new Ship(3);
    let ship3 = new Ship(4);
    gameboard.placeShip([1, 1], [1, 2], ship1);
    gameboard.placeShip([2, 1], [2, 3], ship2);
    gameboard.placeShip([3, 1], [3, 4], ship3);

    expect(gameboard.shipPositions.has("1,1")).toBe(true);
    expect(gameboard.shipPositions.has("2,2")).toBe(true);
    expect(gameboard.shipPositions.has("3,3")).toBe(true);
    expect(gameboard.shipPositions.has("4,4")).toBe(false);
});

//
// ─── Gameboard.ships (getter) ─────────────────────────────────────────────────
//

test('Ensure ships returns all possible values', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(2);
    let ship2 = new Ship(3);
    let ship3 = new Ship(4);
    let ship4 = new Ship(5);

    gameboard.placeShip([1, 1], [1, 2], ship1);
    gameboard.placeShip([2, 1], [2, 3], ship2);
    gameboard.placeShip([3, 1], [3, 4], ship3);

    expect(gameboard.ships.has(ship1)).toBe(true);
    expect(gameboard.ships.has(ship2)).toBe(true);
    expect(gameboard.ships.has(ship3)).toBe(true);
    expect(gameboard.shipPositions.has(ship4)).toBe(false); // NOTE: maybe you meant `.ships.has(ship4)`?
});

//
// ─── Gameboard.clearBoard() ───────────────────────────────────────────────────
//

test('Ensure clearGameboard properly removes all data', () => {
    let gameboard = new Gameboard();
    let ship1 = new Ship(2);
    gameboard.placeShip([1, 1], [1, 2], ship1);
    gameboard.receiveAttack([1, 5]);

    expect(gameboard.ships.has(ship1)).toBe(true);
    expect(gameboard.shipPositions.has("1,1")).toBe(true);
    expect(gameboard.attackCoord.has("1,5")).toBe(true);

    gameboard.clearBoard();

    expect(gameboard.ships.has(ship1)).toBe(false);
    expect(gameboard.shipPositions.has("1,1")).toBe(false);
    expect(gameboard.attackCoord.has("1,5")).toBe(false);
});

test('Repeated clearBoard() calls should not throw errors or retain state', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(2);
    gameboard.placeShip([1, 1], [1, 2], ship);
    gameboard.receiveAttack([5, 5]);

    gameboard.clearBoard();
    gameboard.clearBoard(); // second call

    expect(gameboard.ships.size).toBe(0);
    expect(gameboard.attackCoord.size).toBe(0);
    expect(gameboard.shipPositions.size).toBe(0);
});

//
// ─── Gameboard.checkShips() ───────────────────────────────────────────────────
//

test('Gameboard correctly identifies all ships sunk', () => {
    let gameboard = new Gameboard();
    let ship = new Ship(2);
    let ship2 = new Ship(3);

    gameboard.placeShip([1, 1], [1, 2], ship);
    gameboard.placeShip([2, 1], [2, 3], ship2);

    gameboard.receiveAttack([1, 1]);
    gameboard.receiveAttack([1, 2]);
    gameboard.receiveAttack([2, 1]);
    gameboard.receiveAttack([2, 2]);
    gameboard.receiveAttack([2, 3]);

    expect(gameboard.checkShips()).toBe(true);

    let ship3 = new Ship(3);
    gameboard.placeShip([3, 1], [3, 3], ship3);

    expect(gameboard.checkShips()).toBe(false);
});