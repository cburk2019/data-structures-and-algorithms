'use strict';

// Require our stack class
const { Stack } = require('../index');


describe('Testing Stack', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(2);
    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":2,"next":null}}');
    expect(stack.top.value).toStrictEqual(2);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":4,"next":{"value":3,"next":{"value":2,"next":null}}}}');
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toStrictEqual(3);
    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":2,"next":null}}');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(JSON.stringify(stack)).toStrictEqual('{"top":null}');
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toStrictEqual(3);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toStrictEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.peek()).toStrictEqual('Cannot peek. Stack is empty');
    expect(stack.pop()).toStrictEqual('Cannot pop. Stack is empty');
  });

});



