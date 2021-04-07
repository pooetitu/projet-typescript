import {firstPokemonToFight, Pokemon} from "../src/models/pokemon";

let salameche = new Pokemon("salameche", 50,60,[]);
let herbizarre = new Pokemon("herbizarre", 50,40,[]);
let carapuce = new Pokemon("carapuce", 45,50,[]);

describe('PokemonAttack', () => {
    it('should show the name of the pokemon salameche', () => {
        expect(salameche.name).toBe("salameche");
    });

    it('should return salameche wich has the highest speed', () => {
        expect(firstPokemonToFight(salameche, carapuce)).toBe(salameche);
    });

    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
    });
    it('should return a random pokemon when their speed is equal', () => {
        expect(firstPokemonToFight(salameche, herbizarre)).toBe(salameche);
    });
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    });
});