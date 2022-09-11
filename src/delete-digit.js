const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = str.split('');

  const maxArr = arr.filter((_, index) => index !== arr.length - 1);
  const maxStr = maxArr.join('');

  let maxN = Number(maxStr);

  for (let i = arr.length - 2; i >= 0; i--) {
    const curArr = arr.filter((_, index) => index !== i);
    const curStr = curArr.join('');
    const curN = Number(curStr);
    if (curN > maxN) {
      maxN = curN;
    }
  }
  return maxN;
}

module.exports = {
  deleteDigit
};
