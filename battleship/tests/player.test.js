import { Player } from '../src/player.js';
import { Gameboard } from '../src/gameboard.js';

describe('Player class', () => {
    let player;

    beforeEach(() => {
        player = new Player();
    });

    // ───────────────────────────────────────────────────────────────
    // Constructor & Default Layout
    // ───────────────────────────────────────────────────────────────
    test('initializes with a gameboard and isReady true', () => {
        expect(player.gameboard).toBeInstanceOf(Gameboard);
        expect(player.isReady).toBe(true);
    });

    // ───────────────────────────────────────────────────────────────
    // resetLayout()
    // ───────────────────────────────────────────────────────────────
    test('resetLayout clears and reinitializes the default layout', () => {
        const spy = jest.spyOn(player.gameboard, 'clearBoard');
        player.resetLayout();
        expect(spy).toHaveBeenCalled();
        expect(player.isReady).toBe(true);
    });

    // ───────────────────────────────────────────────────────────────
    // updateLayout()
    // ───────────────────────────────────────────────────────────────
    test('updateLayout returns error if not exactly 5 ships', () => {
        const badLayout = [[[1,1],[1,5],5]]; // Only one ship
        const result = player.updateLayout(badLayout);
        expect(result.result).toBe("error");
        expect(player.isReady).toBe(false);
    });

    test('updateLayout returns error if ship data is invalid', () => {
        const badLayout = [[[1,1],[1,5],"five"], [[1,1],[1,2],2], [[2,2],[2,3],2], [[3,3],[3,4],2], [[4,4],[4,5],2]];
        const result = player.updateLayout(badLayout);
        expect(result.result).toBe("error");
        expect(player.isReady).toBe(false);
    });

    test('updateLayout returns success with valid ship data', () => {
        const layout = [
            [[1,1],[1,5],5],
            [[2,1],[2,4],4],
            [[3,1],[3,3],3],
            [[4,1],[4,3],3],
            [[5,1],[5,2],2]
        ];
        const result = player.updateLayout(layout);
        expect(result.result).toBe("success");
        expect(player.isReady).toBe(true);
    });

    // ───────────────────────────────────────────────────────────────
    // takeTurn()
    // ───────────────────────────────────────────────────────────────
    test('takeTurn returns attack result and win status', () => {
        const enemy = new Player();
        const coord = [1, 10]; // Default layout uses col 10
        const result = player.takeTurn(coord, enemy.gameboard);
        expect(result).toHaveProperty('result');
        expect(result).toHaveProperty('hasWon');
    });
});