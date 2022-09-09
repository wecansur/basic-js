const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    if (typeof(arr[i]) === 'number') {
      result.push(arr[i]);
      i++;
    } else if (arr[i] === '--discard-next') {
      i = i + 2;
    } else if (arr[i] === '--discard-prev') {
      if (result[result.length - 1] === arr[i - 1]) {
        result.pop()
      }
      i++;
    } else if (arr[i] === '--double-next') {
      result.push(arr[i + 1]);
      i++;
    } else if (arr[i] === '--double-prev') {
      result.push(arr[i - 1]);
      i++;
    }
  }
  return result;
}

module.exports = {
  transform
};
