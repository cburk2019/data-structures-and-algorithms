'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverseLLIterative() {
    try {
      let current = this.head;
      while (current) {
        current = current.next;
      }
    } catch (error) {
      throw `Sorry partner, unable to iteratively traverse LinkedList: ${error}`;
    }
  }

  traverseLLRecursive() {
    try {
      let current = this.head;
      // recursive case
      if (current) {
        console.log(current);
        traverseLLRecursive(current.next);
      } return; // base case
    } catch (error) {
      throw `Sorry partner, unable to recursively traverse LinkedList: ${error}`;
    }
  }

  // insert a value to the head with an O(1) Time performance
  insert(value) {
    try {
      let nodeToInsert = new Node(value);
      if (this.head === null) {
        this.head = nodeToInsert;
        this.tail = nodeToInsert;
      } else {
        nodeToInsert.next = this.head;
        this.head = nodeToInsert;
      }
    } catch (error) {
      throw `Sorry partner, unable to insert value into the head: ${error}`;
    }
  }

  // indicates whether that value exists within the list and return true or false
  includes(value) {
    try {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch (error) {
      throw `Sorry partner, unable to search for value in LinkedList: ${error}`;
    }
  }

  // returns all the values as a string
  toString() {
    try {
      let current = this.head;
      let string = '';
      while (current) {
        string += `{${current.value}} -> `;
        current = current.next;
      } return string += 'NULL';
    } catch (error) {
      throw `Sorry partner, unable to return LinkedList values as a string: ${error}`;
    }
  }

  // adds a new node with the given value to the end of the list
  append(value) {
    try {
      let current = this.head;
      let newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        while (current.next) {
          current = current.next;
        } current.next = new Node(value);
      }
    } catch (error) {
      throw `Sorry partner, unable to append value: ${error}`;
    }
  }

  // adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    try {
      if (this.head) {
        let current = this.head;
        let previous = null;
        while (current) {
          if (current.value === value) {
            let newNode = new Node(newValue);
            newNode.next = current;
            if (previous) {
              previous.next = newNode;
            } else {
              this.head = newNode;
            }
          }
          previous = current;
          current = current.next;
        }
      }
    } catch (error) {
      throw `Sorry partner, unable to add a new Node before the value specified: ${error}`;
    }
  }

  // adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    try {
      if (this.head) {
        let current = this.head;
        while (current) {
          if (current.value === value) {
            let saveRestOfList = current.next;
            let newNode = new Node(newValue);
            current.next = newNode;
            newNode.next = saveRestOfList;
          }
          current = current.next;
        }
      }
    } catch (error) {
      throw `Sorry partner, unable to add a new Node after the value specified: ${error}`;
    }
  }

}

module.exports = {
  LinkedList,
  Node
};
