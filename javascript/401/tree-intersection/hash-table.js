'use strict';

const LinkedList = require('./linked-list.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 599) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);
    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.map[index];

    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        }
        current = current.next;
      }
    } else {
      return null;
    }
  }

  contains(key) {
    let index = this.hash(key);
    let bucket = this.map[index];

    if (bucket) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HashTable;
