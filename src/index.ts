import Deck from "./Deck";
import Game from "./Game";
import Player from "./Player";
import { shuffle } from './lib/shuffle';

function main() {
    try {
        const deck = new Deck();
        deck.shuffleCards(shuffle);
        const cards = deck.splitCards(2);

        const player1 = new Player(cards[0], 1);
        const player2 = new Player(cards[1], 2);
      
        const game = new Game(player1, player2);
        game.play();
    } catch (error) {
        console.error("An error occurred:", error);
        process.exit(1);
    }
}

main();