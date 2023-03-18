import Deck from "../src/Deck";

describe("Deck class", () => {
  describe("getCards method", () => {
    it("should return an array of numbers", () => {
      const deck = new Deck(10);
      const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(deck.getCards()).toEqual(expect.arrayContaining(expectedOutput));
    });
  });

  describe("shuffleCards method", () => {
    it("should shuffle the cards of the deck", () => {
      const deck = new Deck(5);
      deck.shuffleCards((array) => {
        return array.reverse();
      });
      const expectedOutput = [5, 4, 3, 2, 1];
      expect(deck.getCards()).toEqual(expectedOutput);
    });
  });

  describe('splitCards', () => {
    it('should split the deck into 2 equal chunks', () => {
      const deck = new Deck(52);
      const chunks = deck.splitCards(2);
      expect(chunks.length).toEqual(2);
      expect(chunks[0].length).toEqual(26);
      expect(chunks[1].length).toEqual(26);
    });

    it('should split the deck into 3 equal chunks', () => {
      const deck = new Deck(39);
      const chunks = deck.splitCards(3);
      expect(chunks.length).toEqual(3);
      expect(chunks[0].length).toEqual(13);
      expect(chunks[1].length).toEqual(13);
      expect(chunks[2].length).toEqual(13);
    });

    it('should throw an error when trying to split the deck of 52 cards into 5 chunks', () => {
      const deck = new Deck(52);
      expect(() => {
        deck.splitCards(5);
      }).toThrowError('Cannot split the deck into 5 equal chunks.');
    });

    it('should throw an error when trying to split the deck of 52 cards into 0 chunks', () => {
      const deck = new Deck(52);
      expect(() => {
        deck.splitCards(0);
      }).toThrowError('Cannot split the deck into 0 equal chunks.');
    });

    it('should throw an error when trying to split the deck into more chunks than the total number of cards', () => {
      const deck = new Deck(52);
      expect(() => {
        deck.splitCards(53);
      }).toThrowError('Cannot split the deck into 53 equal chunks.');
    });
  });
});
