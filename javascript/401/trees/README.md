# Trees

Created by Christopher Burk

## Challenge

Create a binary tree class with 3 depth first traversal methods:\

- `pre-order`\
- `in-order`\
- `post-order`

Create a binary search tree subclass with add and contains methods that add new nodes to the appropriate place in the search tree while searching to see if the tree contains a node with a given value. Include test suites for all methods.

## Inputs / Outputs

## Binary Tree

### preOrder Traversal Method

`Input`: Binary Tree Root\
`Output`: none

### doPreOrder Method

`Input`: none\
`Output`: array of values, ordered appropriately (pre-order)

### inOrder Traversal Method

`Input`: Binary Tree Root\
`Output`: none

### doInOrder Method

`Input`: none\
`Output`: array of values, ordered appropriately (in-order)

### postOrder Traversal Method

`Input`: Binary Tree Root\
`Output`: none

### doPostOrder Method

`Input`: none\
`Output`: array of values, ordered appropriately (post-order)

### findMax Traversal Method

`Input`: binary tree root\
`Output`: none

### doFindMax Method

`Input`: none\
`Output`: max value in binary tree

## Binary Search Tree (BST)

### Add Method

`Input`: value to create a new node\
`Output`: none

### Contains Method

`Input`: value to search\
`Output`: boolean

## Approach & Efficiency

- All 3 depth traversal methods utilize recursion and have an O(n) time efficiency.

- The binary search tree add and search methods are O(h) O(height) time complexity. The search method is O(1) space complexity.

- The binary tree findMax method is a recursive method and utilizes 0(n) time complexity and 0(n) space complexity. If tree nodes has n nodes, worst case -> you will have to search the entire tree.

## Solution Code

[Binary Tree](./binary-tree.js)
[Binary Search Tree](./binary-search-tree.js)
[Breadth First](./breadth-first.js)
[FizzBuzz](./fizz-buzz.js)

## Test Suites

[Binary Tree Test Suite](./__tests__/binary-tree.test.js)  
[Binary Search Tree Test Suite](./__tests__/binary-search-tree.test.js)
[Breadth First Test Suite](./__test__/breadth-first.test.js)
[FizzBuzz Test Suite](./__tests__/fizz-buzz.test.js)
