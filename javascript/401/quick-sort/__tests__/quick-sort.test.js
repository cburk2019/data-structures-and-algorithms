const quickSort = require('../quick-sort.js');

describe('Testing Quick Sort Method', () => {

  it('Can successfully sort an array', () => {
    const arr = [8, 4, 23, 42, 16, 15];

    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Can sort an array with one value', () => {

    const arr = [8];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([8]);
  });

  it('Can sort an array with negative values', () => {
    const arr = [-8, 4, 23, 42, 16, 15];

    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([-8, 4, 15, 16, 23, 42]);
  });

  it('Can sort an array with value of 0', () => {
    const arr = [0, 4, 23, 42, 16, 15];

    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([0, 4, 15, 16, 23, 42]);
  });

  it('Can sort an array thats already sorted', () => {
    const arr = [0, 4, 15, 16, 23, 42];

    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([0, 4, 15, 16, 23, 42]);
  });
});
