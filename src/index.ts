import Deck from "./Deck";
import Game from "./Game";
import Player from "./Player";
import { shuffle } from './lib/shuffle';

function main() {
    try {
        const deck1 = new Deck(52);
        deck1.shuffleCards(shuffle);
        const cards = deck1.splitCards(2);
      
        const p1 = new Player(cards[0], 1);
        const p2 = new Player(cards[1], 2);
      
        const game = new Game([p1, p2]);
        game.play();
    } catch (error) {
        console.error("An error occurred:", error);
        process.exit(1);
    }
}

main();