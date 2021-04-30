import {Pokemon} from "./models/pokemon";
import {Attack} from "./models/attack";
import {Battle} from "./models/battle";

const battle = new Battle(new Pokemon("salameche", 50, 25, 1, 10, 5, [
        new Attack("flammeche", 40, 25),
        new Attack("roue de feu", 35, 15)]),
    new Pokemon("salameche", 50, 25, 1, 10, 5, [
        new Attack("flammeche", 40, 25),
        new Attack("roue de feu", 35, 15)]));

battle.startBattle().then((p) => console.log(`Battle ended with: ${p.name} won`));

