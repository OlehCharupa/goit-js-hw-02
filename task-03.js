// ===============================================================
// _____________hw-02____task-03_________________________________

const findLongestWord = function (string) {
  let arrayWord = string.split(" ");
  let longestWord = arrayWord[0];
  let wordLength = arrayWord[0].length;
  for (let i = 1; i < arrayWord.length; i++) {
    if (wordLength < arrayWord[i].length) {
      wordLength = arrayWord[i].length;
      longestWord = arrayWord[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
