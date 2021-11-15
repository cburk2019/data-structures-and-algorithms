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

});
