import Game from '../src/Game';
import Player from '../src/Player';

describe("Game", () => {
  describe("play()", () => {
    it("should play a game with two players", () => {
      const player1 = new Player([1, 2, 3, 4, 5], 1);
      const player2 = new Player([2, 3, 4, 5, 6], 2);
      const game = new Game([player1, player2]);

      game.play();
      
      expect(player1.getRoundWins() + player2.getRoundWins()).toBe(5);
    });

    it("should correctly determine the winner of the game", () => {
      const player1 = new Player([1, 2, 3, 4, 5], 1);
      const player2 = new Player([2, 3, 4, 5, 6], 2);
      const game = new Game([player1, player2]);

      game.play();

      const player2Wins = player2.getRoundWins();

      expect(player2Wins).toBe(5);
    });

    it("should correctly handle ties", () => {
      const player1 = new Player([7, 2, 4, 5], 1);
      const player2 = new Player([1, 6, 3, 8], 2);
      const game = new Game([player1, player2]);

      game.play();

      const player1Wins = player1.getRoundWins();
      const player2Wins = player2.getRoundWins();
      expect(player1Wins).toBe(player2Wins);
    });
  });
});
