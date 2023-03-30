import Player from './Player';

export default class Game {
  private player1: Player;
  private player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  play() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let round = 1;

    while (this.player1.hasCards() && this.player2.hasCards()) {
      const card1 = this.player1.showTopCard();
      const card2 = this.player2.showTopCard();

      if (!card1 || !card2) {
        continue;
      }

      const validCards = [card1, card2];
      const maxRank = Math.max(...validCards.map(card => ranks.indexOf(card.rank)));
      const winningCards = validCards.filter(card => ranks.indexOf(card.rank) === maxRank);
      const winningScores = winningCards.map(card => card.value);

      console.log(`Round ${round}:`);
      console.log(`Cards: ${card1.rank}, ${card2.rank}.`);
      console.log(`Scores: ${card1.value}, ${card2.value}.`);
      console.log(`Winning cards: ${winningCards.map(card => card.rank).join(', ')}.`);

      if (winningCards.includes(card1)) {
        const score = winningScores.reduce((acc, val) => acc + val, 0);
        this.player1.incrementScore(score);
      } else {
        this.player2.incrementScore(winningScores.reduce((acc, val) => acc + val, 0));
      }

      round++;
    }

    this.showResults();
  }

  private showResults() {
    const player1Wins = this.player1.getScore();
    const player2Wins = this.player2.getScore();

    if (player1Wins > player2Wins) {
      console.log(`Player ${this.player1.getId()} won with ${player1Wins} score.`);
    } else if (player2Wins > player1Wins) {
      console.log(`Player ${this.player2.getId()} won with ${player2Wins} score.`);
    } else {
      console.log(`It is a tie with ${player1Wins} score each.`);
    }
  }
}
