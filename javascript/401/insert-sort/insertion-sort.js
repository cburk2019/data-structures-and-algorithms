'use strict';

function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    let previousIndex = i - 1;
    let currentValue = array[i];

    while (previousIndex >= 0 && currentValue < array[previousIndex]) {
      array[previousIndex + 1] = array[previousIndex];
      previousIndex = previousIndex - 1;
    }

    array[previousIndex + 1] = currentValue;
  }

  return array;
}

module.exports = insertionSort;
