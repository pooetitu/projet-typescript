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

    public attack(attacker: Pokemon, defending: Pokemon) {
        if(this.pp >0) {
            defending.receiveDamage(Math.floor(Math.floor(Math.floor(2 * attacker.level / 5 + 2) * attacker.attack * this.damage / defending.defense) / 50) + 2);
            this.pp--;
        }
    }
}
