const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      return this.head = node;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

module.exports = LinkedList;
