'use strict';

// Require our stack class
const AnimalShelter = require('../classes/animal-shelter.js');

describe('Testing Animal Shelter Queue', () => {
  let dog1 = {
    type: 'dog',
    name: 'Pepper',
  };

  let dog2 = {
    type: 'dog',
    name: 'Biscuit',
  };

  let dog3 = {
    type: 'dog',
    name: 'Booger',
  };

  let cat1 = {
    type: 'cat',
    name: 'Dr. Evil',
  };

  let cat2 = {
    type: 'cat',
    name: 'Little Me',
  };

  let cat3 = {
    type: 'cat',
    name: 'Cats have slaves',
  };

  it('Can successfully enqueue cat and dog', () => {

    const shelter = new AnimalShelter();

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);

    expect(shelter.dogs.front.value.name).toStrictEqual('Pepper');
    expect(shelter.cats.front.value.name).toStrictEqual('Dr. Evil');
  });

  it('Can successfully enqueue multiple cats and dogs', () => {

    const shelter = new AnimalShelter();

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    shelter.enqueue(dog3);

    expect(shelter.dogs.front.value.name).toStrictEqual('Pepper');
    expect(shelter.dogs.back.value.name).toStrictEqual('Booger');

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);
    shelter.enqueue(cat3);

    expect(shelter.cats.front.value.name).toStrictEqual('Dr. Evil');
    expect(shelter.cats.back.value.name).toStrictEqual('Cats have slaves');
  });

  it('Can successfully dequeue cat and dog', () => {

    const shelter = new AnimalShelter();

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue('dog')).toStrictEqual(dog1);

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('cat')).toStrictEqual(cat1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    const shelter = new AnimalShelter();

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    shelter.dequeue('dog');
    shelter.dequeue('dog');

    expect(shelter.dogs.front).toStrictEqual(null);
    expect(shelter.dogs.back).toStrictEqual(null);

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);
    shelter.dequeue('cat');
    shelter.dequeue('cat');

    expect(shelter.cats.front).toStrictEqual(null);
    expect(shelter.cats.back).toStrictEqual(null);

  });

  it('Can successfully instantiate an empty shelter queue', () => {

    const shelter = new AnimalShelter();

    expect(shelter.cats.front).toStrictEqual(null);
    expect(shelter.cats.back).toStrictEqual(null);

    expect(shelter.dogs.front).toStrictEqual(null);
    expect(shelter.dogs.back).toStrictEqual(null);
  });

  it('Calling dequeue on empty queue raises exception', () => {

    const shelter = new AnimalShelter();

    expect(shelter.dequeue('dog')).toStrictEqual('Cannot remove node. Queue is empty');
    expect(shelter.dequeue('cat')).toStrictEqual('Cannot remove node. Queue is empty');
  });

});
