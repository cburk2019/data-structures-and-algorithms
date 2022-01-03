const insertionSort = require('../insertion-sort.js');

describe('Testing Insertion Sort Method', () => {

  it('Can successfully sort an array', () => {
    const arr = [8, 4, 23, 42, 16, 15];

    expect(insertionSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Can sort an array with one value', () => {
    const arr = [8];

    expect(insertionSort(arr)).toStrictEqual([8]);
  });

  it('Can sort an array with negative values', () => {
    const arr = [-8, 4, 23, 42, 16, 15];

    expect(insertionSort(arr)).toStrictEqual([-8, 4, 15, 16, 23, 42]);
  });

  it('Can sort an array with value of 0', () => {
    const arr = [0, 4, 23, 42, 16, 15];

    expect(insertionSort(arr)).toStrictEqual([0, 4, 15, 16, 23, 42]);
  });

  it('Can sort an array thats already sorted', () => {
    const arr = [0, 4, 15, 16, 23, 42];

    expect(insertionSort(arr)).toStrictEqual([0, 4, 15, 16, 23, 42]);
  });
});
