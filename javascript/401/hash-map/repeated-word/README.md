# Repeated Word Challenge

## Problem Domain

Find the first repeated word in a book.

- _[Code](./repeated-word.js)_
- _[Test Suite](./__tests__/repeated-word.test.js)_

## Feature Tasks

Write a function called repeated word that finds the first word to occur more than once in a string.

- `Arguments`: string
- `Return`: string

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Input / Output

- input - `"Once upon a time, there was a brave princess who..."`
- output - `"a"`

- input - `"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."`
- output - `"summer"`

## Algorithm

- convert the "story", or the `input`, to an array that we can iterate over the `words` contained in the `input`
- create a `set` that will hold unique instances of `words`
- for each `item` in the array
  - we need to check if the set contains the `word`
    - if the set does contain the word, return the `word`
    - if the set does not contain the `word`, add the `word` to the set
- if by the end of the array there are no repeated words
  - return `null`

## Pseudocode

- WORDS -> split INPUT
- SET -> new HashSET
- WORD in WORDS
  - [ if (WORD) ]
    - return WORD
  - [ else + WORD ]
- return NULL

## Big O

`Time` - O(n)\
`Space` - O(n)
