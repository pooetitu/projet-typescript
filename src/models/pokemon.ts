import {Attack} from "./attack";

export class Pokemon {
    name: string;
    speed: number;
    health: number;
    level:number;
    attack:number;
    defense:number;
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

    public receiveDamage(damage: number){
        this.health -= damage;
    }

    public isDead(): boolean{
        return this.health <= 0;
    }
}

export async function firstPokemonToFight(first: Pokemon, second: Pokemon): Promise<Pokemon> {
    if (first.speed === second.speed) {
        return (Math.round(Math.random()) === 0 ? first:second);
    }
    else if(first.speed > second.speed){
        return first;
    }
    return second;
}

export async function selectRandomAttack(pokemon: Pokemon): Promise<Attack | null> {
    const availableAttacks = pokemon.attacks.filter(p => p.pp > 0);
    if(availableAttacks.length <= 0) {
        console.log(`${pokemon.name} can't attack because he has no pp left`)
        return null;
    }
    const index = Math.floor(Math.random() * availableAttacks.length);
    return availableAttacks[index];
}
