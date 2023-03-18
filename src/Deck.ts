export default class Deck {
    private cards: number[];

    constructor(numberOfCards: number) {
        this.cards = new Array(numberOfCards).fill(null).map((_, i) => i + 1);
    }

    getCards() {
        return this.cards;
    }

    shuffleCards(shuffleFn: (array: number[]) => number[]) {
        this.cards = shuffleFn(this.cards);
    }

    splitCards(n: number = 2): number[][] | never {
        const totalCards = this.cards.length;

        if (totalCards % n !== 0 || n < 0 || n > totalCards) {
            throw new Error(`Cannot split the deck into ${n} equal chunks.`);
        }

        const chunkSize = totalCards / n;
        const result: number[][] = [];

        for (let i = 0; i < totalCards; i += chunkSize) {
          const chunk = this.cards.slice(i, i + chunkSize);
          result.push(chunk);
        }
        return result;
    }
}