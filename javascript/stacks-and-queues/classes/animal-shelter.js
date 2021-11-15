'use strict';

const Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue;
    this.cats = new Queue;
  }

  // adds a new Node to the back of queue
  enqueue(animalObj) {
    // animal object can be either a dog or a cat
    try {
      if (animalObj.type !== 'dog' && animalObj.type !== 'cat') {
        throw new Error('Partner, please enter either dog or cat');
      }

      if (animalObj.type === 'dog') {
        this.dogs.enqueue(animalObj);
        return;
      }
      this.cats.enqueue(animalObj);
    } catch (error) {
      throw `Sorry partner, unable to add a new animal to the back of shelter queue: ${error}`;
    }
  }

  // removes the node from the front of the queue
  dequeue(pref) {
    // Return: either a dog or a cat, based on preference
    try {
      if (pref !== 'dog' && pref !== 'cat') {
        return null;
      }
      if (pref === 'dog') {
        return this.dogs.dequeue();
      }
      return this.cats.dequeue();
    } catch (error) {
      throw `Sorry partner, unable to remove animal from front of shelter queue: ${error}`;
    }
  }
}

module.exports = AnimalShelter;
