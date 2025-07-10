import { Ship } from './ship';

test('Attempt to create a ship with correct length', () => {
    const ship = new Ship(4);
    expect(ship.length).toBe(4);
});

test('Attempt to create a ship with invalid length', () => {
    //Negative length
    expect(() => new Ship(-15)).toThrow("Length of ship is invalid");
    //Decimal length
    expect(() => new Ship(1.53)).toThrow("Length of ship is invalid");
    //Non-numeric character
    expect(() => new Ship('aaaaa')).toThrow("Length of ship is invalid");
    //Greater than allowed length
    expect(() => new Ship(8)).toThrow("Length of ship is invalid");
});

test('tracks number of hits and does not mark ship as sunk before reaching max hits', () => {
    const ship = new Ship(4);
    for (let i = 0; i < ship.length - 1; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.sunk).toBe(false);
});

test('marks ship as sunk when number of hits equals its length', () => {
    const ship = new Ship(3);
    for (let i = 0; i < ship.length; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.sunk).toBe(true);
});

test('toString returns the correct status string', () => {
    const ship = new Ship(3);
    
    expect(ship.toString()).toBe('Ship(length = 3, hits = 0, sunk = false)');

    ship.hit();
    expect(ship.toString()).toBe('Ship(length = 3, hits = 1, sunk = false)');

    ship.hit();
    ship.hit();
    expect(ship.toString()).toBe('Ship(length = 3, hits = 3, sunk = true)');
});