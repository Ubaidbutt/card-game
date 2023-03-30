import Game from '../src/Game';
import Player from '../src/Player';

describe('Game', () => {
  describe('play()', () => {
    it('should play the game and correctly determine the winner of the game', () => {
      const player1 = new Player([
        { rank: '3', value: 1 },
        { rank: '5', value: 1 },
        { rank: '8', value: 1 },
      ], 1);
      const player2 = new Player([
        { rank: '2', value: 1 },
        { rank: '6', value: 1 },
        { rank: '9', value: 1 },
      ], 2);
      const game = new Game(player1, player2);

      game.play();

      const player1Wins = player1.getScore();
      const player2Wins = player2.getScore();
      expect(player2Wins).toBeGreaterThan(player1Wins);
    });

    it('should correctly handle ties', () => {
      const player1 = new Player([
        { rank: '2', value: 1 },
        { rank: '3', value: 1 },
        { rank: '4', value: 1 },
        { rank: '5', value: 1 },
        { rank: '6', value: 1 },
      ], 1);
      const player2 = new Player([
        { rank: '2', value: 1 },
        { rank: '7', value: 1 },
        { rank: '3', value: 1 },
        { rank: '7', value: 1 },
        { rank: '8', value: 1 },
      ], 2);
      const game = new Game(player1, player2);

      game.play();

      expect(player1.getScore()).toBe(3);
      expect(player2.getScore()).toBe(3);
    });
  });
});
