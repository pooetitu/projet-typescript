import {firstPokemonToFight, Pokemon, selectRandomAttack} from "../src/models/pokemon";
import {Attack} from "../src/models/attack";

let salameche = new Pokemon("salameche", 50,60,1,10,10,[new Attack("flammeche",10,0), new Attack("roue de feu",10,10)]);
let herbizarre = new Pokemon("herbizarre", 50,40,1,10,10,[]);
let carapuce = new Pokemon("carapuce", 45,0,1,10,10,[]);

let magicarpe = new Pokemon("carapuce", 45,0,1,10,10,[new Attack("trempette",0,0)]);

describe('Pokemon', () => {
    it('should show the name of the pokemon salameche', () => {
        expect(salameche.name).toBe("salameche");
    });

    it('should return salameche wich has the highest speed', () => {
        expect(firstPokemonToFight(salameche, carapuce)).toEqual(salameche);
    });
    describe("should return a random pokemon when their speed is equal",() =>{
        it('should return first pokemon when random return 0', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0)
            expect(firstPokemonToFight(salameche, herbizarre)).toEqual(salameche);
        });
        it('should return second pokemon when random return 1', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(1)
            expect(firstPokemonToFight(salameche, herbizarre)).toEqual(herbizarre);
        });
        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        });
    });
    it('should return true if it has less than 0 health point', () => {
        expect(carapuce.isDead()).toBe(true);
    });
    it('should return false if it has more than 0 health point', () => {
        expect(salameche.isDead()).toBe(false);
    });
    it('should have less health point since it took damage', ()=>{
        salameche.receiveDamage(20);
        expect(salameche.health).toBe(40);
    });
    describe('should return a random attack with enough pp', ()=>{
        it('should not be the first element in the list since it has no pp',()=>{
            jest.spyOn(global.Math, 'random').mockReturnValue(0)
            expect(selectRandomAttack(salameche)).not.toEqual(salameche.attacks[0]);
        });
        it('should be the second element in the list since it has enough pp',()=>{
            jest.spyOn(global.Math, 'random').mockReturnValue(0)
            expect(selectRandomAttack(salameche)).toEqual(salameche.attacks[1]);
        });
        it('should return no attack since the all the attacks has no pp left',()=>{
            jest.spyOn(global.Math, 'random').mockReturnValue(0)
            expect(selectRandomAttack(magicarpe).name).toBe("lutte");
        });
        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        });
    });
});
