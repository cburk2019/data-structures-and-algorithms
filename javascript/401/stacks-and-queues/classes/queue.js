'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  // adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value) {
    try {
      let node = new Node(value);
      if (this.back && this.front) {
        this.back.next = node;
        this.back = node;
      } else {
        this.front = node;
        this.back = node;
      }
    } catch (error) {
      throw `Unable to add a new node to the back of queue: ${error}`;
    }
  }

  // removes the node from the front of the queue
  dequeue() {
    try {
      if (!this.front) {
        return 'Cannot remove node. Queue is empty';
      } else if (this.front === this.back) {
        this.back = null;
      }

      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    } catch (error) {
      throw `Unable to remove node from front of queue: ${error}`;
    }
  }

  // finds the value of the node located at the front of the queue
  peek() {
    try {
      if (!this.front) {
        return 'Cannot peek. Queue is empty';
      }
      return this.front.value;
    } catch (error) {
      throw `Unable to find the node at the front of the queue: ${error}`;
    }
  }

  // Checks if queue is empty. Returns boolean indicating whether or not the stack is empty.
  isEmpty() {
    try {
      return (this.front) ? false : true;
    } catch (error) {
      throw `Unable to check if queue is empty: ${error}`;
    }
  }
}

module.exports = Queue;
