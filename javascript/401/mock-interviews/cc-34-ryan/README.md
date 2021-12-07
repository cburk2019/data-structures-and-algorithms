# Prompt

## Interview 01

Determine the most common word in a book.

## Feature Tasks

- Ask the candidate to write a function that determines the most common word in a book.
- The most efficient solution to this problem is to use a HashTable.
- Spaces don’t count, and words are not case sensitive (i.e. Cat, CAT, and cat are all the same)
- Don’t concern yourself wth punctuation.
- The function created should take in a string as an argument.
- The best approach to this is to iterate through the string and to keep a “tally” of how many times a word appears.
- The word should be the “key”, and a counter as the “value”
- The word with the highest counter at the end is the returned word.
- It is possible for the candidate to have a “tempWord” and “tempCounter” that will hold the highest word and count so far. This will prevent them from having to iterate through the hashtable once the string is completed.
- Time and Space is O(n).

## Edge Cases

It is possible to have words show up the same amount of times as others, In this case, return the first occurrence (i.e. both “dog” and “cat” show up twice -> return “dog”);

## Example

`Input`:

- 'In a galaxy far far away'
- 'Taco cat ate a taco'
- 'No. Try not. Do or do not. There is no try.'

`Output`:

- far
- taco
- No

## Whiteboard

![cc34 whiteboard](./img/cc34.png)

## Working Code and Test Suite

- _[CC34 - index.js](./index.js)_
- _[CC34 - Test Suite](./__tests__/cc-34.test.js)_
