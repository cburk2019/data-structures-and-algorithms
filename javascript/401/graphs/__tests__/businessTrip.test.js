'use strict';

// const Graph = require('../Graph');

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');

describe('Placeholder Test', () => {
  it('Should pass!', () => {
    let placeholder = 'Placeholder text';
    expect(placeholder).toStrictEqual('Placeholder text');
  });
});
