let string = 'In a galaxy Far faR away';

function findMostUsedWord(string) {
  /* console.log(string) */
  let stringHash = new Map();
  let splitString = string.split(' ');
  console.log(splitString);

  let mostUsedWord = '';
  let count = 0;

  splitString.forEach(word => {
    let loweredCaseWord = word.toLowerCase();
    if (stringHash.get(loweredCaseWord)) {
      stringHash.set(loweredCaseWord, stringHash.get(loweredCaseWord) + 1);
      if (stringHash.get(loweredCaseWord) >= count) {// is this value greater than count
        mostUsedWord = loweredCaseWord;
        count = stringHash.get(loweredCaseWord);
      }
    } else {
      stringHash.set(loweredCaseWord, 1);
      if (stringHash.get(loweredCaseWord) >= count) {// is this value greater than count
        mostUsedWord = loweredCaseWord;
        count = stringHash.get(loweredCaseWord);
      }
    }
  });
  return mostUsedWord;
}

let result = findMostUsedWord(string);
console.log(result);

module.exports = findMostUsedWord;
