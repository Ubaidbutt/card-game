import Player from "./Player";

export default class Game {
    private players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    play() {
        while (this.hasMoreCards()) {
            const scores = this.players.map(player => player.showTopCard());
            const validScores = scores.filter(score => score !== undefined) as number[];
            const maxScore = Math.max(...validScores);
            const winners = this.players.filter((_, i) => scores[i] === maxScore);

            console.log(`Scores: ${scores.join(', ')}.`);
            console.log(`Round winners: ${winners.map(w => `Player ${w.getId()}`).join(', ')}.`);

            winners.forEach(w => w.incrementRoundWin());
        }

        this.showResults();
    }

    private hasMoreCards(): boolean {
        return this.players.every(player => player.hasCards());
    }

    private showResults() {
        const roundWins = this.players.map(player => player.getRoundWins());
        const maxRoundWins = Math.max(...roundWins);
        const winners = this.players.filter((_, i) => roundWins[i] === maxRoundWins);

        if (winners.length === 1) {
            console.log(`Player ${winners[0].getId()} won with ${maxRoundWins} round wins.`);
        } else {
            console.log(`It is a tie between players ${winners.map(w => w.getId()).join(', ')} with ${maxRoundWins} round wins.`);
        }
    }
}