import { Card } from "./types";

export default class Player {
    private id: number;
    private cards: Card[];
    private totalRoundWins: number;
  
    constructor(cards: Card[], id: number) {
      this.id = id;
      this.cards = cards;
      this.totalRoundWins = 0;
    }
  
    getId() {
      return this.id;
    }
  
    getScore() {
      return this.totalRoundWins;
    }
  
    incrementScore(score: number) {
      this.totalRoundWins += score;
    }
  
    hasCards() {
      return this.cards.length > 0;
    }
  
    showTopCard() {
      return this.cards.pop();
    }
}
  