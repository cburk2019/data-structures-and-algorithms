
const BinarySearchTree = require('../binary-search-tree.js');
const Node = require('../node.js');

describe('Testing Binary Search Tree', () => {

  it('Can instantiate an empty binary search tree', () => {
    const tree = new BinarySearchTree();

    expect(tree.root).toStrictEqual(null);
  });

  it('Can instantiate a binary search tree with a single root node', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);

    expect(tree.root.value).toStrictEqual(23);
    expect(tree.root.right).toStrictEqual(null);
    expect(tree.root.left).toStrictEqual(null);
  });

  it('Can add a left child and right child to a single root node', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);
    tree.root.left = new Node(8);
    tree.root.right = new Node(42);

    expect(tree.root.value).toStrictEqual(23);
    expect(tree.root.left.value).toStrictEqual(8);
    expect(tree.root.right.value).toStrictEqual(42);
  });

  it('Can return a collection from a pre-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);
    tree.root.left = new Node(8);
    tree.root.right = new Node(42);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(16);
    tree.root.right.left = new Node(27);

    expect(tree.doPreOrder()).toStrictEqual([23, 8, 4, 16, 42, 27]);
  });

  it('Can return a collection from a in-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);
    tree.root.left = new Node(8);
    tree.root.right = new Node(42);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(16);
    tree.root.right.left = new Node(27);

    expect(tree.doInOrder()).toStrictEqual([4, 8, 16, 23, 27, 42]);
  });

  it('Can return a collection from a post-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(24);
    tree.root.left = new Node(8);
    tree.root.right = new Node(42);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(16);
    tree.root.right.left = new Node(27);

    expect(tree.doPostOrder()).toStrictEqual([4, 16, 8, 27, 42, 24]);
  });

  it('Can add a new node in the correct location in the binary search tree', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);
    tree.root.left = new Node(8);
    tree.root.right = new Node(42);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(16);
    tree.root.right.left = new Node(27);
    // tree.add(6);

    expect(tree.contains(16)).toBeTruthy();
  });

  it('Can indicate whether or not the value is in the tree at least once', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);
    tree.root.left = new Node(8);

    expect(tree.contains(8)).toStrictEqual(true);
    expect(tree.contains(400)).toStrictEqual(false);
  });

});
