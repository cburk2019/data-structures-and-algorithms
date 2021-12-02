'use strict';

const breadthFirst = require('../breadth-first.js');
const BinaryTree = require('../binary-tree.js');
const Node = require('../node.js');

describe('Testing Binary Tree, Breadth First', () => {

  it('Function can return a collection from a breadth first traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.right.right = new Node(9);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right.left = new Node(4);

    expect(breadthFirst(tree)).toStrictEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

});
