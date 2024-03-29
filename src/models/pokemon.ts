import {Attack} from "./attack";

export class Pokemon {
    name: string;
    speed: number;
    health: number;
    level: number;
    attack: number;
    defense: number;
    attacks: Attack[];

    constructor(name: string, speed: number, health: number, level: number, attack: number, defense: number, attacks: Attack[]) {
        this.name = name;
        this.speed = speed;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;
        this.attacks = attacks;
    }

    public receiveDamage(damage: number) {
        this.health -= damage;
    }

    public isDead(): boolean {
        return this.health <= 0;
    }
}

export function firstPokemonToFight(first: Pokemon, second: Pokemon): Pokemon {
    if (first.speed === second.speed) {
        return (Math.round(Math.random()) === 0 ? first : second);
    } else if (first.speed > second.speed) {
        return first;
    }
    return second;
}

export function selectRandomAttack(pokemon: Pokemon): Attack {
    const availableAttacks = pokemon.attacks.filter(p => p.pp > 0);
    if (availableAttacks.length <= 0) {
        return new Attack("lutte", 50, Infinity);
    }
    const index = Math.floor(Math.random() * availableAttacks.length);
    return availableAttacks[index];
}
