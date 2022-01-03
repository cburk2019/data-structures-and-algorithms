# Merge-Sort

## Problem Domain

Merge Sort is a function that takes in an unsorted array, splits it in half, until each sub-array contains only one element. Then, merges the sub-arrays back together, in `ascending` order until a final sorted array is reached.

## Link to Blog

- _[Merge-Sort Blog](./Blog.md)_

## Input / Output

### _example input array_

`[8,4,23,42,16,15]`

### _example output array_

`[4,8,15,16,23,42]`

## Optimization

Merge Sort is a type of divide-and-conquer algorithm.

Time: O(n log n) - it takes `n` steps to merge arrays, `log n` times

Space: O(n) it uses `n` elements stored in arrays to merge, it consumes `O(n)` space

## Merge-Sort Code

- _[Merge-Sort](./merge-sort.js)_

## Test Suite

- _[Merge-Sort Test Suite](./__tests__/merge-sort.test.js)_
