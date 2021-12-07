'use strict';

describe('Should return the most used word from a string', () => {

  it('Can split an input string', () => {

    let string = 'In a galaxy Far faR away';

    function findMostUsedWord(string) {
      let stringHash = new Map();
      let splitString = string.split(' ');
      let mostUsedWord = '';
      let count = 0;

      splitString.forEach(word => {
        let loweredCaseWord = word.toLowerCase();
        if (stringHash.get(loweredCaseWord)) {
          stringHash.set(loweredCaseWord, stringHash.get(loweredCaseWord) + 1);
          if (stringHash.get(loweredCaseWord) >= count) {
            mostUsedWord = loweredCaseWord;
            count = stringHash.get(loweredCaseWord);
          }
        } else {
          stringHash.set(loweredCaseWord, 1);
          if (stringHash.get(loweredCaseWord) >= count) {
            mostUsedWord = loweredCaseWord;
            count = stringHash.get(loweredCaseWord);
          }
        }
      });
      return mostUsedWord;
    }

    let result = findMostUsedWord(string);

    expect(result).toBe('far');
  });

});
