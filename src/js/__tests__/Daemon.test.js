import Daemon from "../Daemon";

describe('testing Daemon class', () => {
    const lucifer = new Daemon('lucifer', 2);
    lucifer.attack = 200;
    test('lucifer name and distance', () => {
        expect(lucifer.name).toBe('lucifer');
        expect(lucifer.distance).toBe(2);
    })
    test('lucifer stoned false', () => {
        lucifer.stoned = false;
        expect(lucifer.attacked).toBe(180);
    })
    test('lucifer stoned true', () => {
        lucifer.distance = 1;
        lucifer.stoned = true;

        // attack = 200 * (1 - (1 - 1) * 0,1) - log2(1) * 5 = 200
        expect(lucifer.attacked).toBe(200);
    })
    test('lucifer final attack below 0', () => {
        lucifer.attack = 5;
        lucifer.stoned = true;
        lucifer.distance = 4;

        // attack = 5 * (1 - (4 - 1) * 0,1) - log2(4) * 5 = 0
        expect(lucifer.attacked).toBe(0);
    })
})