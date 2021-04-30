import {firstPokemonToFight, Pokemon, selectRandomAttack} from "./models/pokemon";
import {Attack} from "./models/attack";

async function battle() {
    const pokemons = [
        new Pokemon("salameche", 50,25,1,10,5,[
            new Attack("flammeche",10,10),
            new Attack("roue de feu",10,10)]),
        new Pokemon("salameche", 50,25,1,10,5,[
            new Attack("flammeche",10,10),
            new Attack("roue de feu",10,10)])]
    let turn = pokemons.indexOf(await firstPokemonToFight(pokemons[0],pokemons[1]));

    const interval = setInterval(async () => {
        const attack = await selectRandomAttack(pokemons[turn % 2]);
        if(attack !== null){
            await attack.attack(pokemons[turn % 2], pokemons[(turn+1) % 2]);
        }
        if(pokemons[turn%2].isDead() || pokemons[(turn+1)%2].isDead()) {
            clearInterval(interval);
        }
        turn++;
    },1000);
}

battle().then(() => console.log("Battle starting"));
