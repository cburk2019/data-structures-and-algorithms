function leftJoin(hashMap1, hashMap2) {

  const wordsArray = [];

  hashMap1.keys.forEach(key => {
    wordsArray.push({
      word: key,
      synonym: hashMap1.get(key),
      antonym: hashMap2.get(key)
    });
  });

  return wordsArray;
}

module.exports = leftJoin;
