'use strict';

function repeatedWord(story) {

  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const regexStory = removePunctuation(story, regex);

  const words = regexStory.split(' ');

  let wordSet = new Set();

  for (let i = 0; i < words.length; i++) {
    if (wordSet.has(words[i].toLowerCase())) {
      return words[i].toLowerCase();
    } else {
      wordSet.add(words[i].toLowerCase());
    }
  }

  return null;
}

function removePunctuation(string, regex) {
  return string.replace(regex, '');
}
module.exports = repeatedWord;
