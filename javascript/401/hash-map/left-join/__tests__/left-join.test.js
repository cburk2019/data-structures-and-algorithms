'use strict';

const leftJoin = require('../index');
const HashMap = require('../hashMap.js');

describe('Testing Left Join Function', () => {

  it('Should left join two hash maps into an array of objects', () => {
    const hashMap1 = new HashMap(1024);
    hashMap1.add('fond', 'enamored');
    hashMap1.add('wrath', 'enamored');
    hashMap1.add('diligent', 'employed');
    hashMap1.add('outfit', 'garb');
    hashMap1.add('guide', 'usher');

    const hashMap2 = new HashMap(1024);
    hashMap2.add('fond', 'averse');
    hashMap2.add('wrath', 'delight');
    hashMap2.add('diligent', 'idle');
    hashMap2.add('flow', 'jam');
    hashMap2.add('guide', 'follow');

    expect(leftJoin(hashMap1, hashMap2)).toStrictEqual([
      { word: 'fond', synonym: 'enamored', antonym: 'averse' },
      { word: 'wrath', synonym: 'enamored', antonym: 'delight' },
      { word: 'diligent', synonym: 'employed', antonym: 'idle' },
      { word: 'outfit', synonym: 'garb', antonym: null },
      { word: 'guide', synonym: 'usher', antonym: 'follow' }
    ]);
  });

  it('Will not add values from the second hash map if the first does not have that key', () => {
    const hashMap1 = new HashMap(1024);
    hashMap1.add('fond', 'enamored');
    hashMap1.add('guide', 'usher');

    const hashMap2 = new HashMap(1024);
    hashMap2.add('fond', 'averse');
    hashMap2.add('flow', 'jam');
    hashMap2.add('guide', 'follow');

    expect(leftJoin(hashMap1, hashMap2)).toStrictEqual([
      { word: 'fond', synonym: 'enamored', antonym: 'averse' },
      { word: 'guide', synonym: 'usher', antonym: 'follow' }
    ]);
  });

  it('Should add a value of null if no key exists in the second hash map ', () => {
    const hashMap1 = new HashMap(1024);
    hashMap1.add('fond', 'enamored');
    hashMap1.add('guide', 'usher');

    const hashMap2 = new HashMap(1024);
    hashMap2.add('fond', 'averse');

    expect(leftJoin(hashMap1, hashMap2)).toStrictEqual([
      { word: 'fond', synonym: 'enamored', antonym: 'averse' },
      { word: 'guide', synonym: 'usher', antonym: null }
    ]);
  });

  it('Should return an empty array if there are no key value pairs in the first hashmap', () => {
    const hashMap1 = new HashMap(1024);

    const hashMap2 = new HashMap(1024);
    hashMap2.add('fond', 'averse');
    hashMap2.add('flow', 'jam');
    hashMap2.add('guide', 'follow');

    expect(leftJoin(hashMap1, hashMap2)).toStrictEqual([]);
  });
});
