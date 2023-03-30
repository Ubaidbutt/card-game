import Deck from '../src/Deck';

describe('Deck class', () => {
  describe('getCards method', () => {
    it('should return an array of card objects', () => {
      const deck = new Deck();
      expect(deck.getCards().length).toEqual(52);
    });
  });

  describe('shuffleCards method', () => {
    it('should shuffle the cards of the deck', () => {
      const deck = new Deck();
      const originalCards = [...deck.getCards()];
      deck.shuffleCards((array) => {
        return array.reverse();
      });
      expect(deck.getCards()).not.toEqual(originalCards);
    });
  });

  describe('splitCards method', () => {
    it('should split the deck into 2 equal chunks', () => {
      const deck = new Deck();
      const chunks = deck.splitCards(2);
      expect(chunks.length).toEqual(2);
      expect(chunks[0].length).toEqual(26);
      expect(chunks[1].length).toEqual(26);
    });

    it('should throw an error when trying to split the deck into 5 chunks', () => {
      const deck = new Deck();
      expect(() => {
        deck.splitCards(5);
      }).toThrowError('Cannot split the deck into 5 equal chunks.');
    });

    it('should throw an error when trying to split the deck into 0 chunks', () => {
      const deck = new Deck();
      expect(() => {
        deck.splitCards(0);
      }).toThrowError('Cannot split the deck into 0 equal chunks.');
    });

    it('should throw an error when trying to split the deck into more chunks than the total number of cards', () => {
      const deck = new Deck();
      expect(() => {
        deck.splitCards(53);
      }).toThrowError('Cannot split the deck into 53 equal chunks.');
    });
  });
});
