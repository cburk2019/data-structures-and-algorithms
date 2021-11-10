'use strict';

const Queue = require('./queue.js');

function breadthFirst(tree) {
  if (!tree.root) {
    throw 'Sorry partner, the tree is empty';
  }
  let arrayOfValues = [];
  let breadthQueue = new Queue();
  breadthQueue.enqueue(tree.root);

  while (breadthQueue.front) {
    let front = breadthQueue.dequeue();
    arrayOfValues.push(front.value);

    if (front.left) {
      breadthQueue.enqueue(front.left);
    }

    if (front.right) {
      breadthQueue.enqueue(front.right);
    }
  }
  return arrayOfValues;
}

module.exports = breadthFirst;
