# Implementation: Stacks and Queues

## Problem Domain

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

### Node

Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.

### Stack

Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.

- This object should be aware of a default empty value assigned to `top` when the stack is created.
- The class should contain the following methods:
  - `push`
    - Arguments: value
    - Adds a new node with that value to the top of the stack with an O(1) Time performance.
  - `pop`
    - Arguments: none
    - Returns: the value from node from the top of the stack
    - Removes the node from the top of the stack
    - Should raise exception when called on empty stack
  - `peek`
    - Arguments: none
    - Returns: Value of the node located at the top of the stack
    - Should raise exception when called on empty stack
  - `isEmpty`
    - Arguments: none
    - Returns: Boolean indicating whether or not the stack is empty.

### Queue

Create a `Queue` class that has a `front` property. It creates an empty Queue when instantiated.

- This object should be aware of a default empty value assigned to `front` when the queue is created.
- The class should contain the following methods:
  - `enqueue`
    - Arguments: value
    - Adds a new node with that value to the `back` of the queue with an O(1) Time performance.
  - `dequeue`
    - Arguments: none
    - Returns: the value from node from the front of the queue
    - Removes the node from the front of the queue
    - Should raise exception when called on empty queue
  - `peek`
    - Arguments: none
    - Returns: Value of the node located at the front of the queue
    - Should raise exception when called on empty stack
  - `isEmpty`
    - Arguments: none
    - Returns: Boolean indicating whether or not the queue is empty

You have access to the Node class and all the properties on the Linked List class.

## Whiteboard Process

![Stack and Queue](./img/stack-and-queue.pnng)\

## Algorithm

Create a Node class with a constructor with properties for the value and next.

### Stacks

Create a Stack class with a constructor with a `top` property and set the top to `null`.

- Create methods for `push`, `pop`, `peek`, and `isEmpty`.
  - `push` will take in a value as an argument
    - declare a `temp` variable set to equal the `top`
    - declare a `node` variable to equal a new instance of `Node` which takes in a value
    - set node.next to equal the temp variable
    - set the top to equal the node.
  - `pop` won't take in any arguments
    - declare a `temp` variable set to equal the `top`
    - make the top equal to temp.next
    - return the temp value
  - `peek` won't take in any arguments
    - check to see if the top is empty
    - return the top.value
  - `isEmpty` won't take in any arguments
    - return the top to equal null

### Queues

Create a Queue class with a constructor with `front` and `back` properties and sets both to `null`.

- Create methods for `enqueue`, `dequeue`, `peek`, and `isEmpty`.
  - `enqueue` will take in a value as an argument
    - declare a `node` variable to equal a new instance of `Node` which takes in a value
    - declare currentRear to equal rear
    - if currentRear is not equal to null, then we would set currentRear.next to equal node
    - rear will then equal node.
    - Otherwise the front will equal the node
  - `dequeue` won't take in any arguments
    - declare a node to remove (temp) to equal front
    - front will then equal the temp's next
    - if the rear equals the temp, then the rear will be the temp's next.
    - return the value of the temp
  - `peek` won't take in any arguments
    - check to see if the front is empty
    - return the front.value
  - `isEmpty` won't take in any arguments
    - return the front to equal null

## Pseudocode

```plaintext
class Stack
  constructor
    this.top = null

  push takes in value
    let temp = this.top
    let node = new Node takes in value
    node.next = temp
    this.top = node

  pop
    let temp = this.top
    this.top = temp.next
    return remp.value

  peek
    if this.top is empty
      return exception
    return top.value

  isEmpty
    return top = null

class Queue
  constructor
    this.front = null
    this.rear = null

  enqueue takes in value
    let node = new Node takes in value
    let currentRear = this.rear

    if currentRear is not null
      currentRear.next = node
    this.rear = node

    if this.front is false
      this.front = node

  dequeue
    let temp = this.front
    this.front = temp.next
    if this.rear equals temp
      this.rear = temp.next
    return temp.value

  peek
    if this.front is empty
      return exception
    return front.value

  isEmpty
    return front = null
```

## Code

[stack-and-queue.js](./stack-and-queue.js)
