'use strict';

const LinkedList = require('./linked-list.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let sum = 0;

    // Add all the ASCII values of the string (key) together.
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    // Multiply sum by a prime number (599)
    // Get the remainder when sum is divided by the total size of the array
    return (sum * 599) % this.size;
  }

  add(key, value) {
    // hash the key to get the index position in the hashtable
    let index = this.hash(key);

    // look at that bucket's value
    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    // if a key-value pair is present we can assume it's a linked list and append
    if (bucket) {
      bucket.append(payload);
    } else {
      // if nothing is there, instantiate a new Linked list
      let list = new LinkedList();
      list.append(payload);
      // insert linked list into the hash table at the correct index
      this.map[index] = list;
    }
  }

  // takes in a key, and returns the value or null if nothing found
  get(key) {
    // hash the key
    let index = this.hash(key);

    // look at that bucket's value for the given index
    let bucket = this.map[index];

    // if the bucket holds a value return that value, else return null
    if (bucket) {
      let current = bucket.head;
      // traverse the linked list to find the matching key
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

  // returns a boolean indicating if the key exists in the table already.
  contains(key) {
    // hash the key
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
