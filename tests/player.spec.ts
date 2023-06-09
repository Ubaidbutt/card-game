import Player from '../src/Player';

describe('Player class', () => {
  describe('getId method', () => {
    it('should return the correct id', () => {
      const player = new Player([1, 2, 3], 1);
      expect(player.getId()).toBe(1);
    });
  });

  describe('getRoundWins method', () => {
    it('should return the correct number of round wins', () => {
      const player = new Player([1, 2, 3], 1);
      expect(player.getRoundWins()).toBe(0);
    });
  });

  describe('incrementRoundWin method', () => {
    it('should increment the number of round wins by 1', () => {
      const player = new Player([1, 2, 3], 1);
      player.incrementRoundWin();
      expect(player.getRoundWins()).toBe(1);
    });
  });

  describe('hasCards method', () => {
    it('should return true if the player has cards', () => {
      const player = new Player([1, 2, 3], 1);
      expect(player.hasCards()).toBe(true);
    });

    it('should return false if the player has no cards', () => {
      const player = new Player([], 1);
      expect(player.hasCards()).toBe(false);
    });
  });

  describe('showTopCard method', () => {
    it('should return the last card in the player\'s hand', () => {
      const player = new Player([1, 2, 3], 1);
      expect(player.showTopCard()).toBe(3);
    });

    it('should remove the last card from the player\'s hand', () => {
      const player = new Player([1, 2, 3], 1);
      player.showTopCard();
      expect(player.hasCards()).toBe(true);
      expect(player.showTopCard()).toBe(2);
    });
  });
});
