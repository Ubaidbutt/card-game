import { shuffle } from '../../src/lib/shuffle';

describe('shuffle', () => {
  it('should return an empty array when given an empty array', () => {
    const input: number[] = [];
    const result: number[] = shuffle(input);
    expect(result).toEqual([]);
  });

  it('should shuffle an array of numbers', () => {
    const input: number[] = [1, 2, 3, 4, 5];
    const result: number[] = shuffle(input);
    expect(result).not.toEqual(input);
    expect(result.length).toEqual(input.length);
    expect(result.sort()).toEqual(input.sort());
  });
});
