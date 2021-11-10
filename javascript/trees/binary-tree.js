'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
    this.arrayOfValues = [];
  }

  // -------------------------------- preOrder
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

  // function PreOrder(current) {
  //   console.log(current.value);

  //   if (current.left) {
  //     PreOrder(current.left);
  //   };

  //   if (current.right) {
  //     PreOrder(current.right);
  //   };
  // };

  // -------------------------------- inOrder
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

  // -------------------------------- postOrder

  traversePostOrder(current) {
    try {
      if (current.left !== null) {
        this.traversePostOrder(current.left);
      }
      if (current.right !== null) {
        this.traverseInOrder(current.right);
      }
      this.arrayOfValues.push(current.value);
    } catch (error) {
      throw `Sorry partner, unable to post-order the binary tree: ${error}`;
    }
  }

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
}

module.exports = BinaryTree;
