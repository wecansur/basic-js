const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let arr1 = s1.split('');
  for (let i = 0; i < s2.length; i++) {
    if (arr1.includes(s2[i])) {
      counter++;
      const idx = arr1.indexOf(s2[i]);
      arr1 = arr1.filter((_, index) => index !== idx);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
