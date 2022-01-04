'use strict';

const Node = require('../treeNode.js');
const BinaryTree = require('../binary-tree.js');
const treeIntersection = require('../tree-intersection.js');

describe('Testing Tree-Intersection Function', () => {

  it('Can find common values in 2 binary trees ', () => {
    const tree = new BinaryTree();
    tree.root = new Node(150);
    tree.root.left = new Node(100);
    tree.root.left.left = new Node(75);
    tree.root.left.right = new Node(160);
    tree.root.left.right.right = new Node(175);
    tree.root.left.right.left = new Node(125);
    tree.root.right = new Node(250);
    tree.root.right.left = new Node(200);
    tree.root.right.right = new Node(350);
    tree.root.right.right.right = new Node(500);
    tree.root.right.right.left = new Node(300);

    const tree2 = new BinaryTree();
    tree2.root = new Node(42);
    tree2.root.left = new Node(100);
    tree2.root.left.left = new Node(15);
    tree2.root.left.right = new Node(160);
    tree2.root.left.right.right = new Node(175);
    tree2.root.left.right.left = new Node(125);
    tree2.root.right = new Node(600);
    tree2.root.right.left = new Node(200);
    tree2.root.right.right = new Node(350);
    tree2.root.right.right.right = new Node(500);
    tree2.root.right.right.left = new Node(4);

    expect(treeIntersection(tree, tree2)).toStrictEqual([100, 160, 125, 175, 200, 350, 500]);
  });

  it('Will return an empty array if there are no repeated values ', () => {
    const tree = new BinaryTree();
    tree.root = new Node(150);
    tree.root.left = new Node(100);
    tree.root.left.left = new Node(75);

    const tree2 = new BinaryTree();
    tree2.root = new Node(42);
    tree2.root.left = new Node(10);
    tree2.root.left.left = new Node(15);

    expect(treeIntersection(tree, tree2)).toStrictEqual([]);
  });

  it('Can handle one empty tree ', () => {
    const tree = new BinaryTree();
    tree.root = new Node(150);
    tree.root.left = new Node(100);
    tree.root.left.left = new Node(75);

    const tree2 = new BinaryTree();

    expect(treeIntersection(tree, tree2)).toStrictEqual([]);
  });

  it('Can handle trees with one value ', () => {
    const tree = new BinaryTree();
    tree.root = new Node(150);

    const tree2 = new BinaryTree();
    tree2.root = new Node(150);

    expect(treeIntersection(tree, tree2)).toStrictEqual([150]);
  });
});
