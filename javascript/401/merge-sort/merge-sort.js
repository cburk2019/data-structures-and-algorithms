'use strict';

function mergeSort(array) {

  let arrayLength = array.length;

  if (arrayLength > 1) {
    let mid = Math.floor(arrayLength / 2);
    let leftSubarray = array.slice(0, mid);
    let rightSubarray = array.slice(mid);

    mergeSort(leftSubarray);
    mergeSort(rightSubarray);

    mergeHelper(leftSubarray, rightSubarray, array);
  }
  return array;
}

function mergeHelper(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      array[arrayIndex] = left[leftIndex];
      leftIndex++;
    } else {
      array[arrayIndex] = right[rightIndex];
      rightIndex++;
    }
    arrayIndex++;
  }

  if (leftIndex === left.length) {
    while (arrayIndex < array.length) {
      array[arrayIndex] = right[rightIndex];
      rightIndex++;
      arrayIndex++;
    }
  } else {
    while (arrayIndex < array.length) {
      array[arrayIndex] = left[leftIndex];
      leftIndex++;
      arrayIndex++;
    }
  }
}

module.exports = mergeSort;
