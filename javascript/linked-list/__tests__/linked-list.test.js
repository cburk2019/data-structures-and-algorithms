'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../index');


describe('Testing Linked List', () => {

  it('Can instantiate an empty linked list', () => {

    const list = new LinkedList();

    expect(list.head).toStrictEqual(null);
  });

  it('Can insert a value to the head of a linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);

    list.insert(1027);

    expect(list.head.value).toStrictEqual(1027);
  });

  it('Will return true if value is present in linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);

    expect(list.includes(10)).toStrictEqual(true);
  });

  it('Will return false if value is not present in linked list', () => {

    const list = new LinkedList();
    list.head = new Node(25);

    expect(list.includes(225)).toStrictEqual(false);
  });

  it('Will return a collection of all values in linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(25);
    list.head.next.next = new Node(2);
    list.head.next.next.next = new Node(13);

    expect(list.toString()).toStrictEqual('{10} -> {25} -> {2} -> {13} -> NULL');
  });

  it('Head property points to the first node in linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(25);
    list.head.next.next = new Node(2);
    list.head.next.next.next = new Node(13);

    expect(list.head.value).toStrictEqual(10);
  });

  it('Can successfully add a node to the end of the linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    const currentListTail = list.head.next = new Node(25);

    list.append(300);

    expect(currentListTail.next.value).toStrictEqual(300);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    const currentListTail = list.head.next = new Node(25);

    list.append(300);
    list.append(400);
    list.append(500);

    expect(currentListTail.next.next.value).toStrictEqual(400);
    expect(currentListTail.next.next.next.value).toStrictEqual(500);
  });

  it('Can successfully insert a node before a node in the middle of a linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(25);
    list.head.next.next = new Node(2);

    list.insertBefore(25, 400);

    expect(list.head.next.value).toStrictEqual(400);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);

    list.insertBefore(10, 400);

    expect(list.head.value).toStrictEqual(400);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    let targetNode = list.head.next = new Node(25);
    list.head.next.next = new Node(2);

    list.insertAfter(25, 500);

    expect(targetNode.next.value).toStrictEqual(500);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {

    const list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(25);
    let targetNode = list.head.next.next = new Node(2);

    list.insertAfter(2, 500);

    expect(targetNode.next.value).toStrictEqual(500);
  });

  it('Should return an error where k is greater than the length of the linked list', () => {

    const list = new LinkedList();

    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);

    expect(list.kthFromEnd(5)).toBe(`5 is greater than length of linked list`);
  });

  it('Should return an error where k and the length of the list are the same', () => {

    const list = new LinkedList();

    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);

    expect(list.kthFromEnd(4)).toBe(`4 is greater than length of linked list`);
  });

  it('Should return an error where k is not a positive integer', () => {

    const list = new LinkedList();

    list.head = new Node(1);

    list.head.next = new Node(2);
    expect(list.kthFromEnd(-2)).toBe(`Please choose a positive number to input`);
  });

  it('Should return a value where the linked list is of a size 1', () => {

    const list = new LinkedList();

    list.head = new Node(1);

    expect(list.kthFromEnd(0)).toBe(1);
  });

  it('Should return a value where k is not at the end, but somewhere in the middle of the linked list', () => {

    const list = new LinkedList();

    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);

    expect(list.kthFromEnd(2)).toBe(2);
  });

  it('Should return a linked lists, zipped', () => {

    const list1 = new LinkedList();
    list1.head = new Node(1);
    list1.head.next = new Node(3);
    list1.head.next.next = new Node(5);
    list1.head.next.next.next = new Node(7);

    const list2 = new LinkedList();
    list2.head = new Node(2);
    list2.head.next = new Node(4);
    list2.head.next.next = new Node(6);
    list2.head.next.next.next = new Node(8);

    let zipLL = list1.zipLists(list1, list2);

    expect(list1.toString(zipLL)).toBe(`{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> {7} -> {8} -> NULL`);
  });

  it('Should return a zipped linked list when the lists are different lengths', () => {

    const list1 = new LinkedList();
    list1.head = new Node(1);
    list1.head.next = new Node(3);

    const list2 = new LinkedList();
    list2.head = new Node(2);
    list2.head.next = new Node(4);
    list2.head.next.next = new Node(6);
    list2.head.next.next.next = new Node(8);

    let zipLL = list1.zipLists(list1, list2);

    expect(list1.toString(zipLL)).toBe(`{1} -> {2} -> {3} -> {4} -> {6} -> {8} -> NULL`);
  });

});
