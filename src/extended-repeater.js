const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if ('addition' in options) {
    result = `${str}${options.addition}`;
  } else {
    result = str;
  }
  for (let i = 2; i <= options.repeatTimes; i++) {
    if ('separator' in options) {
      if ('addition' in options) {
        result+= `${options.separator}${str}${options.addition}`;
        for (let j = 2; j <= options.additionRepeatTimes; j++) {
          if ('additionSeparator' in options) {
            result+= `${options.additionSeparator}${options.addition}`
          } else {
            result+= `|${options.addition}`
          }
        }
      } else {
        result+= `${options.separator}${str}`;
      }
    } else {
      
      if ('addition' in options) {
        for (let j = 2; j <= options.additionRepeatTimes; j++) {
          if ('additionSeparator' in options) {
            result+= `${options.additionSeparator}${options.addition}`
          } else {
            result+= `|${options.addition}`
          }
        }
      } else {
        result += `+${str}`;
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};
