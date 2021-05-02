import {Pokemon} from "../src/models/pokemon";
import {Battle} from "../src/models/battle";
import {Attack} from "../src/models/attack";

let herbizarre: Pokemon;
let carapuce: Pokemon;
let battle: Battle;
let attackFunction: jest.SpyInstance<void, [attacker: Pokemon, defending: Pokemon]>;

describe("Battle", () => {
    describe('battle ends', () => {
        beforeEach(() => {
            herbizarre = new Pokemon("herbizarre", 50, 40, 1, 10, 10, [new Attack("Vine Whip", 45, 25)]);
            carapuce = new Pokemon("carapuce", 45, 0, 1, 15, 10, [new Attack("Water gun", 40, 25)]);
            battle = new Battle(herbizarre, carapuce);
            attackFunction = jest.spyOn(battle, "attack");
        });
        it('should be herbizarre who wins the battle', async () => {
            const pokemon = await battle.startBattle(0);
            expect(pokemon).toEqual(herbizarre);
        });
        it('should not call attack when their is a pokemon with its health points less or equal to 0', async () => {
            await battle.startBattle(0);
            expect(attackFunction).not.toHaveBeenCalled();
        });
        it('should return the pokemon still alive', () => {
            expect(battle.getWinner()).toEqual(herbizarre);
        });
    });

    describe('battle starts', () => {
        beforeAll(() => {
            herbizarre = new Pokemon("herbizarre", 45, 40, 1, 10, 10, [new Attack("Vine Whip", 45, 25)]);
            carapuce = new Pokemon("carapuce", 50, 40, 1, 15, 10, [new Attack("Water gun", 40, 25)]);
            battle = new Battle(herbizarre, carapuce);
            attackFunction = jest.spyOn(battle, "attack");
        });
        it('should start with with turn 1 since carapuce has more speed', () => {
            expect(battle.selectFirstToAttack()).toBe(1);
        });
        it('should be carapuce who attacks first', () => {
            battle.battleTurn();
            expect(attackFunction).toHaveBeenCalledWith(carapuce, herbizarre);

        });
        it('should increment the turn after attacking', () => {
            expect(battle.turn).toBe(2);
        });
        it('should alternate the attacker on the second turn', () => {
            battle.battleTurn();
            expect(attackFunction).toHaveBeenCalledWith(herbizarre, carapuce);
        });
    });
});
