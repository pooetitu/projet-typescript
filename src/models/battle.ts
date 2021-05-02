import {firstPokemonToFight, Pokemon, selectRandomAttack} from "./pokemon";

export class Battle {
    turn: number;
    pokemons: Pokemon[];

    constructor(first: Pokemon, second: Pokemon) {
        this.pokemons = [];
        this.pokemons.push(first, second);
        this.turn = this.selectFirstToAttack();
    }

    public async startBattle(waitTime: number): Promise<Pokemon> {
        return await new Promise(resolve => {
            const inter = setInterval(() => {
                if (this.pokemons[0].isDead() || this.pokemons[1].isDead()) {
                    resolve(this.getWinner());
                    clearInterval(inter);
                } else {
                    this.battleTurn();
                }
            }, waitTime);
        });
    }

    public battleTurn() {
        this.attack(this.pokemons[this.turn % 2], this.pokemons[(this.turn + 1) % 2]);
        this.turn++;
    }

    public selectFirstToAttack(): number {
        const pokemon = firstPokemonToFight(this.pokemons[0], this.pokemons[1])
        return this.pokemons.indexOf(pokemon);
    }

    public attack(attacker: Pokemon, defending: Pokemon) {
        const attack = selectRandomAttack(attacker);
        attack.attack(attacker, defending);
    }

    public getWinner(): Pokemon {
        return this.pokemons[0].isDead() ? this.pokemons[1] : this.pokemons[0];
    }
}
