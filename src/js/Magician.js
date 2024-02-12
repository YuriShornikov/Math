import Character from "./Character";

export default class Magician extends Character {
    constructor(name, distance) {
        super(name, distance);
        this._stoned = false;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get attacked() {
        const baseAttack = super.attack;

        // формула расстояния
        const distanceModifier = 1 - (this.distance - 1) * 0.1;

        // формула рассчет урона от расстояния
        let modifiedAttack = baseAttack * distanceModifier;

        // коррекция формулы, если получаем дебаф
        if (this.stoned) {
            modifiedAttack -= Math.log2(this.distance) * 5;
        }

        // будет возвращать 0, если значение уйдет ниже нуля
        return Math.max(modifiedAttack, 0);
    }
}