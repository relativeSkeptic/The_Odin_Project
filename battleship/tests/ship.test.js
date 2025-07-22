import { Ship } from '../src/ship.js';

//
// Constructor Tests
//
test('creates a ship with correct length', () => {
    const ship = new Ship(4);
    expect(ship.length).toBe(4);
});

test('throws error for invalid ship lengths', () => {
    // Negative length
    expect(() => new Ship(-15)).toThrow("Length of ship is invalid");
    // Decimal length
    expect(() => new Ship(1.53)).toThrow("Length of ship is invalid");
    // Non-numeric value
    expect(() => new Ship('aaaaa')).toThrow("Length of ship is invalid");
    // Greater than max allowed
    expect(() => new Ship(8)).toThrow("Length of ship is invalid");
});

test('initial values are correct on a new ship', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.numHits).toBe(0);
    expect(ship.isSunk).toBe(false);
});

//
// hit() Method Tests
//
test('tracks number of hits and does not mark ship as sunk prematurely', () => {
    const ship = new Ship(4);
    for (let i = 0; i < ship.length - 1; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.isSunk).toBe(false);
});

test('marks ship as sunk when number of hits equals its length', () => {
    const ship = new Ship(3);
    for (let i = 0; i < ship.length; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.isSunk).toBe(true);
});

test('hitting a ship after it is sunk does not increment hit count', () => {
    const ship = new Ship(2);
    ship.hit(); // 1
    ship.hit(); // 2 => sunk
    ship.hit(); // should be ignored
    expect(ship.numHits).toBe(2);
    expect(ship.isSunk).toBe(true);
});

test('ship of length 1 sinks after one hit', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.numHits).toBe(1);
    expect(ship.isSunk).toBe(true);
});

//
// Getters: isSunk, numHits, length
//
test('getter values reflect correct ship state after hits', () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    expect(ship.numHits).toBe(2);
    expect(ship.isSunk).toBe(false);
    expect(ship.length).toBe(5);
});