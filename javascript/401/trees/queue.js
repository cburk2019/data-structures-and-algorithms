'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  // need to add a new Node with the value to the back of the queue.
  // 0(1) Time
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
      throw `Sorry partner, unable to add a new Node to the back of the queue: ${error}`;
    }
  }

  // remove the node from the front of the queue
  dequeue() {
    try {
      if (!this.front) {
        return 'Sorry partner, unable to remove node. The queue is empty';
      } else if (this.front === this.back) {
        this.back = null;
      }

      let nodeToDequeue = this.front;
      this.front = nodeToDequeue.next;
      return nodeToDequeue.value;
    } catch (error) {
      throw `Sorry partner, unable to remove node from the front of the queue: ${error}`;
    }
  }

  // attempts to find the value of the node that is located at the front of the queue
  peek() {
    try {
      if (!this.front) {
        return 'Unable to peek because the queue is...empty';
      }
      return this.front.value;
    } catch (error) {
      throw `Sorry partner, unable to find the node at the front of the queue: ${error}`;
    }
  }

  // check to see if the queue is empty or not. Returns a boolean that indicates whether or not the queue is empty
  isEmpty() {
    try {
      return (this.front) ? false : true;
    } catch (error) {
      throw `Sorry partner, unable to check if the queue is empty`;
    }
  }
}

module.exports = Queue;
