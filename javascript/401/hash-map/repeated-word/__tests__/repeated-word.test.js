'use strict';

const repeatedWord = require('../repeated-word');

describe('repeatedWord tests', () => {

  it('returns the first repeated word', () => {
    let story = 'Once upon a time, there was a brave princess who...';
    let result = repeatedWord(story);
    expect(result).toBe('a');
  });

  it('returns word even if one is capitalized and one is lowercase', () => {
    let story = 'Once upon A time, there was a brave princess who...';
    let result = repeatedWord(story);
    expect(result).toBe('a');
  });

  it('returns word even if there is punctuation before the word', () => {
    let story = 'Once upon ,a time, there was a brave princess who...';
    let result = repeatedWord(story);
    expect(result).toBe('a');
  });

  it('returns word even if there is punctuation after the word', () => {
    let story = 'Once upon a, time, there was a brave princess who...';
    let result = repeatedWord(story);
    expect(result).toBe('a');
  });

  it('returns null if there are no repeated words', () => {
    let story = 'Once upon a time, there was...';
    let result = repeatedWord(story);
    expect(result).toBe(null);
  });

});
