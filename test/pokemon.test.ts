import {firstPokemonToFight, Pokemon} from "../src/models/pokemon";

let salameche = new Pokemon("salameche", 50,60,1,10,10,[]);
let herbizarre = new Pokemon("herbizarre", 50,40,1,10,10,[]);
let carapuce = new Pokemon("carapuce", 45,50,1,10,10,[]);

describe('PokemonAttack', () => {
    it('should show the name of the pokemon salameche', () => {
        expect(salameche.name).toBe("salameche");
    });

    it('should return salameche wich has the highest speed', () => {
        expect(firstPokemonToFight(salameche, carapuce)).toBe(salameche);
    });
    describe("should return a random pokemon when their speed is equal",() =>{
        it('should return first pokemon when rendom return 0', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0)
            expect(firstPokemonToFight(salameche, herbizarre)).toBe(salameche);
        });
        it('should return second pokemon when rendom return 1', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(1)
            expect(firstPokemonToFight(salameche, herbizarre)).toBe(herbizarre);
        });
        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        });
    });
});
