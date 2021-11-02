'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  // adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    try {
      let node = new Node(value);
      node.next = this.top;
      this.top = node;
    } catch (error) {
      throw `Unable to add a new node to the top of stack: ${error}`;
    }
  }

  // removes the node from the top of the stack
  pop() {
    try {
      if (!this.top) {
        return 'Cannot pop. Stack is empty';
      }
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp.value;
    } catch (error) {
      throw `Unable to remove node from top of stack: ${error}`;
    }
  }

  // finds the value of the node located at the top of the stack
  peek() {
    try {
      if (!this.top) {
        return 'Cannot peek. Stack is empty';
      }
      return this.top.value;
    } catch (error) {
      throw `Unable to find the node at the top of the stack: ${error}`;
    }
  }

  // Checks if stack is empty. Returns boolean indicating whether or not the stack is empty.
  isEmpty() {
    try {
      return (this.top) ? false : true;
    } catch (error) {
      throw `Unable to check if stack is empty: ${error}`;
    }
  }
}

module.exports = Stack;
