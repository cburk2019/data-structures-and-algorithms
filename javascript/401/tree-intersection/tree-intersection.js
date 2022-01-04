'use strict';

const HashTable = require('./hash-table.js');

function treeIntersection(binaryTree1, binaryTree2) {

  const valuesArray = [];
  const root1 = binaryTree1.root;
  const root2 = binaryTree2.root;

  if (root1 && root2) {
    let hashTable = traverseTree(root1, valuesArray);
    traverseTree2(root2, valuesArray, hashTable);
  }

  return valuesArray;
}

function traverseTree(current, valuesArray, hashTable = new HashTable(1024)) {

  hashTable.add(current.value.toString(), current);

  if (current.left) {
    traverseTree(current.left, valuesArray, hashTable);
  }

  if (current.right) {
    traverseTree(current.right, valuesArray, hashTable);
  }

  return hashTable;
}

function traverseTree2(current, valuesArray, hashTable) {

  if (hashTable.get(current.value.toString())) {
    valuesArray.push(current.value);
  }

  if (current.left) {
    traverseTree2(current.left, valuesArray, hashTable);
  }

  if (current.right) {
    traverseTree2(current.right, valuesArray, hashTable);
  }
}

module.exports = treeIntersection;
