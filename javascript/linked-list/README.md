# Linked-List

## Problem Domain

Create a Linked List. The class should contain an `insert method` (which adds a new node to the head of the linked list), an `includes method` (which indicates whether a value exists within the linked list), a `toString method` (which returns a string representing the values in the linked list), an `append method` (which adds a new node with the given value to the end of the list), an `insert before method` (which adds a new node with the given new value immediately before the first node that has the value specified), and an `insert after method` (which adds a new node with the given new value immediately after the first node that has the value specified). Includes semantic error catching and test suite.

## Inputs / Outputs

### **Insert Method**

Input: `value`\
Output: none

### **Includes Method**

Input: `value`\
Output: `boolean`

### **To String Method**

Input: none\
Output: `"{ a } -> { b } -> { c } -> NULL"`

### **Append Method**

Input: `value`\
Output: none

### **Insert Before Method**

Input: `target value, new value`\
Output: none

### **Insert After Method**

Input: `target value, new value`\
Output: none

## Algorithm

### Insert Method

- create a new node with the input value
- set the next property of the new node as the current head (saves the reference to the current linked list)
- set the head to equal the new node created

### Includes Method

- set the current node to equal the head
- loop while current is not null
- inside the while loop, if current.value equals the search value return true
- set current to equal current.next to continue traversing the linked list
- EDGE CASE: outside of while loop return false

### To String Method

- set the current node to equal the head
- declare an empty string variable
- loop while current is not null
- add to the empty string variable with the current nodes value
- once outside of loop add a final value of null to the string

### Append Method

- set the current node to equal the head
- create a new node with the input value
- if their is no head, set it to the new node created
- traverse through the linked list until you reach the end
- set the current nodes next to equal the newly created node.

### Insert Before Method

- check to see if the list includes a head
- set the current node to equal the head
- set the previous node to equal null
- traverse through the linked list:
- if the current node's value matches the target value and the previous node exists (not the head) set the previous next to equal the new node
- if the current node's value matches the target value and the previous node does not exists set head to equal the new node
- set previous to equal current and current to equal current.next

### Insert Before Method?

- check to see if the list includes a head
- set the current node to equal the head
- traverse through the linked list:
- if the current node's value matches the target value, save a reference to the current linked list
- create a new node with the input value
- set the current next to reference the newly created node
- set the new node's next to reference the saved reference to the rest of the linked list
- set current to equal current.next

## Pseudocode

### **Insert Method**

```plaintext

function insert (Value)
// INPUT <-- Value to add
// OUTPUT <-- No output 

  newNode <-- NEW Node
  newNode.Value <-- Value
  newNode.Next <-- Head
  Head <-- newNode
```

### **Includes Method**

```plaintext

function includes (searchValue)
   INPUT <-- searchValue
   OUTPUT <-- boolean

  Current <-- Head

  WHILE Current is not NULL
    IF Current.Value is equal to searchValue
      return TRUE

    Current <-- Current.Next

  return FALSE
```

### **To String Method**

```plaintext

function toString()
// INPUT <-- None
// OUTPUT <-- string 

  Current <-- Head

  WHILE Current is not equal to NULL
    OUTPUT <-- "{Current.Value} --> "
    Current <-- Current.Next

  OUTPUT <-- "NULL"
  ```

### **Append Method**

```plaintext

function append()
// INPUT <-- Value
// OUTPUT <-- none 

  Current <-- Head
  newNode <-- node constructor with input value

  If HEAD === null
    HEAD <-- newNode
  WHILE Current.next is not equal to NULL
    Current <-- Current.Next

  Current.next <-- newNode
  ```

### **Insert Before Method**

```plaintext

function insertBefore()
// INPUT <-- Value, new Value
// OUTPUT <-- none 

  If HEAD
    Current <-- Head
    Previous <-- null

    WHILE Current is not equal to NULL
      newNode <-- node constructor with input value
      newNode.next <-- Current
      if Previous
        Previous.next <-- newNode
      else
        HEAD <-- newNode
      Previous <-- Current
      Current <-- Current.Next

  ```

### **Insert After Method**

```plaintext

function insertAfter()
// INPUT <-- Value, new Value
// OUTPUT <-- none 

  If HEAD
    Current <-- Head

    WHILE Current is not equal to NULL
      if Current.value = Value
        saveRef <-- Current.next
        newNode <-- node constructor with input value
        Current.next <-- newNode
        newNode.next <-- saveRef

      Current <-- Current.Next

  ```

## Solution Code

[index.js](./index.js)

## Tests

[Linked List Test Suite](./__tests__/linked-list.test.js)
