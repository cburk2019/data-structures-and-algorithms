'use strict';

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');

describe('Placeholder test', () => {
  it('Should pass!', () => {
    let placeholderText = 'This is only placeholder text';
    expect(placeholderText).toStrictEqual('This is only placeholder text');
    expect(placeholderText).toBeTruthy();
  });
});
