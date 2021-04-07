import {Pokemon} from "./pokemon";

export class Attack {
    name: string;
    damage: number;
    pp: number;
    ppMax: number;

    constructor(name: string, damage: number, pp: number, ppMax: number) {
        this.name = name;
        this.damage = damage;
        this.pp = pp;
        this.ppMax = ppMax;
    }

    attack(pokemon: Pokemon) {
        pokemon.health -= this.damage * Math.random() * (2 + 1);
        console.log(Math.random() * (2 + 1))
    }
}