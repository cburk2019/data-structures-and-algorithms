# Hash-Table

## Problem Domain

Create a HashTable. The class should contain an `add method` (which hashes the key and adds the key and value pair to the table, handling collisions as needed), a `get method` (which returns value associated with that key in the table), a `contains method` (which returns a boolean, indicating if the key exists in the table already), and a `hash method` (which returns an index in the collection for that key). Includes extensive test suite.

## Inputs / Outputs

**Add Method**

Input: key, value
Output: none

**Get Method**

Input: key
Output: Value associated with that key in the table

**Contains Method**

Input: key
Output: Boolean, indicating if the key exists in the table already.

**Hash Method**

Input: key
Output: Index in the collection for that key

## Algorithm

**Add Method**

- Hash the key to get the index position in the hashtable

- Look at that bucket's value for the given index

- If a key-value pair is present we can assume it's a linked list and append

- If no key-value pair is present, instantiate a new Linked list and insert the linked list into the hash table at the correct index

**Get Method**

- Hash the key to get the index position in the hashtable

- Look at that bucket's value for the given index

- If the bucket holds a value, traverse the linked list within the bucket to find the matching key and return that value

- If a value associated with that key does not exist in the table, return null

**Contains Method**

- Hash the key to get the index position in the hashtable

- Look at that bucket's value for the given index

- If the bucket at that hashed key holds a value, return true

- If the bucket does not exist, return false (the key does not exist in the table)

**Hash Method**

- Add all the ASCII values of the key together

- Multiply sum by a prime number (599)

- Get the remainder when sum is divided by the total size of the array

- Insert key-value pair into the array at that index

## Efficiency

**Add Method**

Time complexity: O(1)
Space complexity: O(n)

**Get Method**

Time complexity: O(1)
Space complexity: O(1)

**Contains Method**

Time complexity: O(1)
Space complexity: O(1)

**Hash Method**

Time complexity: O(n) (depends on size of string)
Space complexity: O(1)

## Solution Code

[index.js](./index.js)

## Tests

[Test Suite](./__tests__/hash-table.test.js)
