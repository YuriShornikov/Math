export default class Character {
    constructor(name, distance) {
        this.name = name;
        this.distance = distance;
        this._attack = 0;
    }

    get attack() {
        return this._attack;
    }

    set attack(value) {
        this._attack = value;
    } 
}