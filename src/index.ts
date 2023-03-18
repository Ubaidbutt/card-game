import Deck from "./Deck";
import Game from "./Game";
import Player from "./Player";
import { shuffle } from './lib/shuffle';
import config from './config/config';

const { numberOfPlayersInAGame, numberOfCardsInADeck } = config;

function main() {
    try {
        const deck = new Deck(numberOfCardsInADeck);
        deck.shuffleCards(shuffle);
        const cards = deck.splitCards(numberOfPlayersInAGame);

        const players: Player[] = [];

        for (let i=0; i<numberOfPlayersInAGame; i++) {
            const player = new Player(cards[i], i+1);
            players.push(player);
        }
      
        const game = new Game(players);
        game.play();
    } catch (error) {
        console.error("An error occurred:", error);
        process.exit(1);
    }
}

main();