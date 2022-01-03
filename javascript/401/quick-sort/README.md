# Quick-Sort

## Problem Domain

Quick Sort is a function that takes in an unsorted array and sorts it in ascending order, by dividing the array into sub-arrays, using a pivot value to determine whether elements should be sorted to a left or right sub-array.

## Blog Link

[Quick-Sort Blog](./Blog.md)

## Inputs / Outputs

### _sample input array_

`[8,4,23,42,16,15]`

### _sample output array_

`[4,8,15,16,23,42]`

## Efficiency

divide-and-conquer algorithm

Time: O(n log n) - It takes `n` steps to partition the array, at `log n` times.

Space: O(1) - Since it only swaps elements within the array and does not create sub-arrays, it uses `O(1)` space.

## Link to Solution Code

[Quick-Sort](./quick-sort.js)

## Test Suite

[Quick-Sort Tests](./__tests__/quick-sort.test.js)  
