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

  describe("splitCards method", () => {
    it("should return an array of arrays", () => {
      const deck = new Deck(10);
      const chunks = deck.splitCards(2);
      expect(chunks).toBeInstanceOf(Array);
      expect(chunks[0]).toBeInstanceOf(Array);
      expect(chunks[1]).toBeInstanceOf(Array);
    });

    it("should return chunks of the correct size", () => {
      const deck = new Deck(12);
      const chunks = deck.splitCards(3);
      expect(chunks[0].length).toBe(4);
      expect(chunks[1].length).toBe(4);
      expect(chunks[2].length).toBe(4);
    });
  });
});
