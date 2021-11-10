'use strict';

const BinaryTree = require('./binary-tree.js');
const Node = require('./node.js');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  // adds a new Node in the correct location in the binary search tree
  addNode(value) {
    try {
      if (!this.root) {
        this.root = new Node(value);
        return;
      }

      let current = this.root;

      while (current) {
        if (current.value < value) {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
      }
    } catch (error) {
      throw `Sorry partner, unable to add a new node in the binary search tree: ${error}`;
    }
  }

  // Returns: a boolean that indicates whether or not the value is in the tree, at least one time
  contains(value) {
    try {
      let current = this.root;

      while (current) {
        if (current.value === value) {
          return true;
        } else if (current.value < value) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
      return false;
    } catch (error) {
      throw `Sorry partner, unable to indicate whether or not the value is in the binary search tree: ${error}`;
    }
  }
}

module.exports = BinarySearchTree;
