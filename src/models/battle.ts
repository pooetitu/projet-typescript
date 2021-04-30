import {firstPokemonToFight, Pokemon, selectRandomAttack} from "./pokemon";

export class Battle {
    private turn: number;
    private pokemons: Pokemon[];

    constructor(first: Pokemon, second: Pokemon) {
        this.pokemons = [];
        this.pokemons.push(first, second);
        this.turn = this.selectFirstToAttack();
    }

    public async startBattle(): Promise<Pokemon> {
        return await new Promise(resolve => {
            const inter = setInterval(() => {
                this.attack();
                if (this.pokemons[0].isDead() || this.pokemons[1].isDead()) {
                    resolve(this.getWinner());
                    clearInterval(inter);
                }
            }, 1000);
        });
    }

    private selectFirstToAttack(): number {
        const pokemon = firstPokemonToFight(this.pokemons[0], this.pokemons[1])
        return this.pokemons.indexOf(pokemon);
    }

    private attack() {
        const attack = selectRandomAttack(this.pokemons[this.turn % 2]);
        attack.attack(this.pokemons[this.turn % 2], this.pokemons[(this.turn + 1) % 2]);
    }

    private getWinner(): Pokemon {
        return this.pokemons[0].isDead() ? this.pokemons[1] : this.pokemons[0];
    }
}
