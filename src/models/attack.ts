import {Pokemon} from "./pokemon";

export class Attack {
    name: string;
    damage: number;
    pp: number;
    ppMax: number;

    constructor(name: string, damage: number, ppMax: number) {
        this.name = name;
        this.damage = damage;
        this.pp = ppMax;
        this.ppMax = ppMax;
    }

    public attack(attacker: Pokemon, defending: Pokemon) {
        let damage = Math.floor(Math.floor(Math.floor(2 * attacker.level / 5 + 2) * attacker.attack * this.damage / defending.defense) / 50) + 2;
        if(this.isCritical()){
            console.log("Critical hit !");
            damage *= 1.5;
        }
        defending.receiveDamage(damage);
        console.log(`${attacker.name} attacks ${defending.name} with ${this.name}, dealing ${damage} damage`)
        this.pp--;
    }

    public isCritical(): boolean {
        return Math.floor(Math.random() * 24) <= 0;
    }
}
