export default class Player {
    private id: number;
    private cards: number[];
    private totalRoundWins: number;

    constructor(cards: number[], id: number) {
        this.id = id;
        this.cards = cards;
        this.totalRoundWins = 0;
    }

    getId() {
        return this.id;
    }

    getRoundWins() {
        return this.totalRoundWins;
    }
     
    incrementRoundWin() {
        return this.totalRoundWins += 1;
    }

    hasCards() {
        return this.cards.length > 0;
    }

    showTopCard() {
        return this.cards.pop();
    }
}