import Character from "../Character";

describe('test Character class', () => {
    const char = new Character('Heroes', 3);
    test('get name, distance Character', () => {
        expect(char.name).toBe('Heroes');
        expect(char.distance).toBe(3);
    })
    test('set get Character', () => {
        char.attack = 100;
        expect(char.attack).toBe(100);
    })
})