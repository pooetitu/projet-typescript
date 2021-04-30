import {Pokemon} from "../src/models/pokemon";
import {Attack} from "../src/models/attack";

let herbizarre: Pokemon;
let carapuce: Pokemon;

function initPokemons() {
    herbizarre = new Pokemon("herbizarre", 50, 40, 1, 10, 10, [new Attack("Vine Whip", 45, 25)]);
    carapuce = new Pokemon("carapuce", 45, 40, 1, 15, 10, [new Attack("Water gun", 40, 25)]);
}

describe('Attack', () => {
    beforeEach(() => {
        initPokemons();
        herbizarre.attacks[0].attack(herbizarre, carapuce);
    });
    it('should have less pp after attacking', () => {
        expect(herbizarre.attacks[0].pp).toBe(24);
    });
    describe('critical hits', () => {
        describe('herbizarre attacks carapuce with a normal hit', () => {
            beforeEach(() => {
                initPokemons();
                jest.spyOn(herbizarre.attacks[0], 'isCritical').mockImplementation(() => false);
                herbizarre.attacks[0].attack(herbizarre, carapuce);
            });
            it('should decrease carapuce health points', () => {
                expect(carapuce.health).toBe(37);
            });
            afterEach(() => {
                jest.spyOn(herbizarre.attacks[0], 'isCritical').mockRestore();
            });
        });
        describe('herbizarre attacks carapuce with a critical hit', () => {
            beforeEach(() => {
                initPokemons();
                jest.spyOn(herbizarre.attacks[0], 'isCritical').mockImplementation(() => true);
                herbizarre.attacks[0].attack(herbizarre, carapuce);
            });
            it('should deal one time and a half the default amount of damage', () => {
                expect(carapuce.health).toBe(35.5);
            });
            afterEach(() => {
                jest.spyOn(herbizarre.attacks[0], 'isCritical').mockRestore();
            });
        });
        describe('', () => {

        });
    });
});
