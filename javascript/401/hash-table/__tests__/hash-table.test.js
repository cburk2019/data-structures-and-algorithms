'use strict';

const HashTable = require('../index');

describe('Testing HashTable', () => {

  it('Can add a key/value pair to the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Christopher', 'Dev');
    expect(hashTable.map[hashTable.hash('Christopher')].head.value['Christopher']).toStrictEqual('Dev');
  });

  it('Can retrieve a value based on a key', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Christopher', 'Dev');
    expect(hashTable.get('Christopher')).toStrictEqual('Dev');
  });

  it('Will return null if a key does not exist in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Christopher', 'Dev');
    expect(hashTable.get('Dev')).toStrictEqual(null);
  });

  it('Will successfully handle a collision in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Christopher', 'Engineer');
    hashTable.add('Christopher', 'Dev');
    expect(hashTable.map[hashTable.hash('Christopher')].head.next.value).toStrictEqual({ 'Christopher': 'Dev' });
  });

  it('Will successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Christopher', 'Engineer');
    hashTable.add('Christopher', 'Dev');
    expect(hashTable.map[hashTable.hash('Christopher')].head.value['Christopher']).toStrictEqual('Engineer');
    expect(hashTable.map[hashTable.hash('Christopher')].head.next.value['Christopher']).toStrictEqual('Dev');
  });

  it('Can successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable(1024);
    expect(hashTable.hash('Christopher')).toStrictEqual(317);
  });

  it('Can successfully return boolean indicating whether key exists in the table', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Christopher', 'Dev');
    expect(hashTable.contains('Christopher')).toStrictEqual(true);
    expect(hashTable.contains('Dev')).toStrictEqual(false);
  });
});
