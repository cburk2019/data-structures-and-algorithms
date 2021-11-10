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

### Get preOrder Traversal Method

`Input`: none\
`Output`: array of values, ordered appropriately (pre-order)

### inOrder Traversal Method

`Input`: Binary Tree Root\
`Output`: none

### Get inOrder Traversal Method

`Input`: none\
`Output`: array of values, ordered appropriately (in-order)

### postOrder Traversal Method

`Input`: Binary Tree Root\
`Output`: none

### Get postOrder Traversal Method

`Input`: none\
`Output`: array of values, ordered appropriately (post-order)

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

## Solution Code

[Binary Tree](./binary-tree.js)  
[Binary Search Tree](./binary-search-tree.js)

## Test Suites

[Binary Tree Tests](./__tests__/binary-tree.test.js)  
[Binary Search Tree Tests](./__tests__/binary-search-tree.test.js)
