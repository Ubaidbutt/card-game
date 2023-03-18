export default class Deck {
    private cards: number[];

    constructor(numberOfCards: number) {
        this.cards = this.cards = new Array(numberOfCards).fill(null).map((_, i) => i + 1);
    }

    getCards() {
        return this.cards;
    }

    shuffleCards(shuffleFn: (array: number[]) => number[]) {
        this.cards = shuffleFn(this.cards);
    }

    splitCards(n: number = 2): number[][] {
        const chunkSize = Math.ceil(this.cards.length / n);
        const result: number[][] = [];

        for (let i = 0; i < this.cards.length; i += chunkSize) {
          const chunk = this.cards.slice(i, i + chunkSize);
          result.push(chunk);
        }
        return result;
    }
}