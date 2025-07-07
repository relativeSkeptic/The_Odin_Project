import { Ship } from './ship';

test('creates a ship with the specified length', () => {
    const ship = new Ship(4);
    expect(ship.length).toBe(4);
});

test('tracks number of hits and does not mark ship as sunk before reaching max hits', () => {
    const ship = new Ship(4);
    for (let i = 0; i < ship.length - 1; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.sunk()).toBe(false);
});

test('marks ship as sunk when number of hits equals its length', () => {
    const ship = new Ship(3);
    for (let i = 0; i < ship.length; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.sunk()).toBe(true);
});

test('marks ship as sunk when number of hits equals its length', () => {
    const ship = new Ship(3);
    for (let i = 0; i < ship.length; i++) {
        ship.hit();
    }
    expect(ship.numHits).toBe(3);
    expect(ship.sunk()).toBe(true);
});
