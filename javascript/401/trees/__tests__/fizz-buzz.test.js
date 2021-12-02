const fizzBuzz = require('../fizz-buzz.js');

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

const KaryTree = { root: null };
KaryTree.root = new Node(1);
KaryTree.root.children.push(new Node(2));
KaryTree.root.children.push(new Node(3));
KaryTree.root.children.push(new Node(4));
KaryTree.root.children[0].children.push(new Node(5));
KaryTree.root.children[0].children.push(new Node(6));
KaryTree.root.children[1].children.push(new Node(7));
KaryTree.root.children[1].children.push(new Node(8));
KaryTree.root.children[2].children.push(new Node(9));
KaryTree.root.children[2].children.push(new Node(10));
KaryTree.root.children[2].children.push(new Node(15));

// invoke fizzBuzz
fizzBuzz(KaryTree);

describe('Testing Fizz Buzz Function', () => {

  it('Should return "Fizz" if the value is divisible by 3', () => {
    expect(KaryTree.root.value).toBe('1');
    expect(KaryTree.root.children[1].value).toBe('Fizz');
    expect(KaryTree.root.children[0].children[1].value).toBe('Fizz');
    expect(KaryTree.root.children[2].children[0].value).toBe('Fizz');
  });

  it('Should return "Buzz" if the value is divisible by 5', () => {
    expect(KaryTree.root.children[0].value).toBe('2');
    expect(KaryTree.root.children[0].children[0].value).toBe('Buzz');
    expect(KaryTree.root.children[2].children[1].value).toBe('Buzz');
  });

  it('Should return "FizzBuzz" if the value is divisible by 3 and 5', () => {
    expect(KaryTree.root.children[2].value).toBe('4');
    expect(KaryTree.root.children[2].children[2].value).toBe('FizzBuzz');
  });

  it('Should turn the number into a String if the value is NOT divisible by 3 or 5', () => {
    expect(KaryTree.root.value).toBe('1');
    expect(KaryTree.root.children[0].value).toBe('2');
    expect(KaryTree.root.children[2].value).toBe('4');
  });

});
