import {Attack} from "./attack";

export class Pokemon {
    name: string;
    speed: number;
    health: number;
    attacks: Attack[];

    constructor(name: string, speed: number, health: number, attacks: Attack[]) {
        this.name = name;
        this.speed = speed;
        this.health = health;
        this.attacks = attacks;
    }
}

export function firstPokemonToFight(first: Pokemon, second: Pokemon): Pokemon {
    if (first.speed === second.speed) {
        return (Math.round(Math.random()) === 0 ? first:second);
    }
    else if(first.speed > second.speed){
        return first;
    }
    return second;
}