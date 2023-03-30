import { shuffle } from '../../src/lib/shuffle';
import { Card } from '../../src/types';

describe('shuffle', () => {
  it('should return an empty array when given an empty array', () => {
    const input: Card[] = [];
    const result: Card[] = shuffle(input);
    expect(result).toEqual([]);
  });

  it('should shuffle an array of numbers', () => {
    const input: Card[] = [{ value: 3, rank: 'A' }, { value: 2, rank: '2' }, { value: 4, rank: '4' }];
    const result: Card[] = shuffle(input);
    expect(result).not.toEqual(input);
    expect(result.length).toEqual(input.length);
  });
});
