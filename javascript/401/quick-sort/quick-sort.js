'use strict';

function quickSort(array, start, end) {

  if (start < end) {
    // set position of pivot value
    let position = partition(array, start, end);
    // sort the left
    quickSort(array, start, position - 1);
    // sort the right
    quickSort(array, position + 1, end);
  }
  return array;
}

function partition(array, start, end) {

  // set the pivot value to the last element
  let pivotValue = array[end];
  let low = start - 1;

  for (let i = start; i <= end; i++) {
    if (array[i] <= pivotValue) {
      // move to the next element
      low++;
      // swap elements
      swap(array, i, low);
    }
  }
  return low;
}

function swap(array, i, low) {

  let temp = array[i];
  array[i] = array[low];
  array[low] = temp;
}

module.exports = quickSort;
