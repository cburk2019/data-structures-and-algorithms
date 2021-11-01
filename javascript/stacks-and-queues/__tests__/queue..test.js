'use strict';

// Require our stack class
const { Queue } = require('../index');

describe('Testing Queue', () => {

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(JSON.stringify(queue)).toStrictEqual('{"front":{"value":2,"next":null},"back":{"value":2,"next":null}}');
    expect(queue.front.value).toStrictEqual(2);
    expect(queue.back.value).toStrictEqual(2);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(JSON.stringify(queue)).toStrictEqual('{"front":{"value":2,"next":{"value":3,"next":{"value":4,"next":null}}},"back":{"value":4,"next":null}}');
    expect(queue.front.value).toStrictEqual(2);
    expect(queue.back.value).toStrictEqual(4);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.dequeue()).toStrictEqual(2);
    expect(JSON.stringify(queue)).toStrictEqual('{"front":{"value":3,"next":{"value":4,"next":null}},"back":{"value":4,"next":null}}');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toStrictEqual(null);
    expect(queue.back).toStrictEqual(null);
    expect(JSON.stringify(queue)).toStrictEqual('{"front":null,"back":null}');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.peek()).toStrictEqual(2);
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toStrictEqual(null);
    expect(queue.back).toStrictEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(queue.peek()).toStrictEqual('Cannot peek. Queue is empty');
    expect(queue.dequeue()).toStrictEqual('Cannot remove node. Queue is empty');
  });

});