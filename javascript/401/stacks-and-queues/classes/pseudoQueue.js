'use strict';

const Stack = require('./stack.js');
// const { Node } = require('./node.js');


class PseudoQueue {
  constructor() {
    this.front = null;
    this.back = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // add a new node to the back of the queue
  enqueue(value) {
    try {
      while (this.stack1.top) {
        let topElement = this.stack1.top.value;
        this.stack1.pop();
        this.stack2.push(topElement);
      }
      this.stack1.push(value);
      this.back = this.stack1.top;
      while (this.stack2.top) {
        let topElement = this.stack2.top.value;
        this.stack2.pop();
        this.stack1.push(topElement);
      }
      this.front = this.stack1.top;
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
      this.front = this.stack1.top.next;
      return this.stack1.pop();
    } catch (error) {
      throw `Unable to remove node from front of queue: ${error}`;
    }
  }
}

module.exports = PseudoQueue;
