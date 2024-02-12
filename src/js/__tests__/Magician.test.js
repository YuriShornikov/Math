import Magician from "../Magician";

describe('testing Magician class', () => {
    const mag = new Magician('Merlin', 2);
    mag.attack = 100;
    test('magician name and distance', () => {
        expect(mag.name).toBe('Merlin');
        expect(mag.distance).toBe(2);
    })
    test('Mag stoned false', () => {
        mag.stoned = false;
        expect(mag.attacked).toBe(90);
    })
    test('Mag stoned true', () => {
        mag.distance = 1;
        mag.stoned = true;

        // attack = 100 * (1 - (1 - 1) * 0,1) - log2(1) * 5 = 100
        expect(mag.attacked).toBe(100);
    })
    test('Mag final attack below 0', () => {
        mag.attack = 5;
        mag.stoned = true;
        mag.distance = 2;

        // attack = 5 * (1 - (2 - 1) * 0,1) - log2(2) * 5 = 0
        expect(mag.attacked).toBe(0);
    })
})