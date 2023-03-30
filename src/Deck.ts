import { Card } from "./types";

export default class Deck {
    private cards: Card[];
  
    constructor() {
      this.cards = [
        ...Array.from({ length: 4 }, () => ({ rank: '2', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '3', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '4', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '5', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '6', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '7', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '8', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '9', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: '10', value: 1 })),
        ...Array.from({ length: 4 }, () => ({ rank: 'A', value: 2 })),
        ...Array.from({ length: 4 }, () => ({ rank: 'J', value: 3 })),
        ...Array.from({ length: 4 }, () => ({ rank: 'Q', value: 4 })),
        ...Array.from({ length: 4 }, () => ({ rank: 'K', value: 5 })),
      ];
    }
  
    getCards() {
      return this.cards;
    }
  
    shuffleCards(shuffleFn: (array: Card[]) => Card[]) {
      this.cards = shuffleFn(this.cards);
    }
  
    splitCards(n: number = 2): Card[][] | never {
      const totalCards = this.cards.length;
  
      if (totalCards % n !== 0 || n < 0 || n > totalCards) {
        throw new Error(`Cannot split the deck into ${n} equal chunks.`);
      }
  
      const chunkSize = totalCards / n;
      const result: Card[][] = [];
  
      for (let i = 0; i < totalCards; i += chunkSize) {
        const chunk = this.cards.slice(i, i + chunkSize);
        result.push(chunk);
      }
      return result;
    }
}  