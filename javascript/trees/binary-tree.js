'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
    this.arrayOfValues = [];
    this.tempMax = 0;
  }

  // -------------------------------------------------- preOrder
  // root -> left -> right

  traversePreOrder(current) {
    try {
      this.arrayOfValues.push(current.value);
      if (current.left !== null) {
        this.traversePreOrder(current.left);
      }
      if (current.right !== null) {
        this.traversePreOrder(current.right);
      }
    } catch (error) {
      throw `Sorry partner, unable to pre-order the binary tree: ${error}`;
    }
  }
  // returns an array of values, ordered (pre-order)
  doPreOrder() {
    try {
      // need to clear out the array
      this.arrayOfValues = [];

      this.traversePreOrder(this.root);
      return this.arrayOfValues;
    } catch (error) {
      throw `Sorry partner, unable to return array of values via pre-order: ${error}`;
    }
  }

  // -------------------------------------------------- inOrder
  // left -> root -> right

  traverseInOrder(current) {
    try {
      if (current.left !== null) {
        this.traverseInOrder(current.left);
      }
      this.arrayOfValues.push(current.value);
      if (current.right !== null) {
        this.traverseInOrder(current.right);
      }
    } catch (error) {
      throw `Sorry partner, unable to in-order the binary tree: ${error}`;
    }
  }
  // returns an array of values, ordered (in-order)
  doInOrder() {
    try {
      // need to clear out the array
      this.arrayOfValues = [];

      this.traverseInOrder(this.root);
      return this.arrayOfValues;
    } catch (error) {
      throw `Sorry partner, unable to return the array of values, in-order: ${error}`;
    }
  }

  // ----------------------------------------------- postOrder
  // left -> right -> root

  traversePostOrder(current) {
    try {
      if (current.left !== null) {
        this.traversePostOrder(current.left);
      }
      if (current.right !== null) {
        this.traversePostOrder(current.right);
      }
      this.arrayOfValues.push(current.value);
    } catch (error) {
      throw `Sorry partner, unable to post-order the binary tree: ${error}`;
    }
  }
  // returns an array of values, ordered (post-order)
  doPostOrder() {
    try {
      // need to clear out the array
      this.arrayOfValues = [];

      this.traversePostOrder(this.root);
      return this.arrayOfValues;
    } catch (error) {
      throw `Sorry partner, unable to return the array of values, post-order: ${error}`;
    }
  }

  // finds the maximum value stored in the tree
  traverseFindMax(current) {
    try {
      if (current.value > this.tempMax) {
        this.tempMax = current.value;
        // console.log(`this.tempMax = :`, this.tempMax);
      }
      if (current.left) {
        this.traverseFindMax(current.left);
      }
      if (current.right) {
        this.traverseFindMax(current.right);
      }
    } catch (error) {
      throw `Sorry partner, unable to return the max value in the binary tree ${error}`;
    }
  }
  // returns the max value in the binary tree
  doFindMax() {
    try {
      if (!this.root) {
        throw `Sorry partner, cannot search for the max value. The binary tree does not have a root`;
      } // need to clear out tempMax
      this.tempMax = 0;
      this.traverseFindMax(this.root);
      return this.tempMax;
    } catch (error) {
      throw `Sorry partner, unable to doFindMax value in the binary tree: ${error}`;
    }
  }

}

module.exports = BinaryTree;
