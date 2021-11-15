'use strict';

const Queue = require('./queue.js');

function fizzBuzz(tree) {
  if (!tree.root) {
    throw 'Sorry partner, the tree is empty';
  }
  let breadthQueue = new Queue();
  breadthQueue.enqueue(tree.root);

  while (breadthQueue.front) {
    let front = breadthQueue.dequeue();
    front.value = fizzBuzzHelper(front.value);

    for (let i = 0; i < front.children.length; i++) {
      breadthQueue.enqueue(front.children[i]);
    }
  }
}

function fizzBuzzHelper(value) {
  if ((value % 3 === 0) && (value % 5 === 0)) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  }

  return value.toString();
}

module.exports = fizzBuzz;
