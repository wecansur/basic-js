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
  const myOptions = {
    rT: 1,
    aRT: 1,
  }
  'separator' in options ? myOptions.sep = options.separator: myOptions.sep = '+';
  'additionSeparator' in options ? myOptions.addSep = options.additionSeparator : myOptions.addSep = '|';
  'addition' in options ? myOptions.add = options.addition: myOptions.add = '';
  'repeatTimes' in options ? myOptions.rT = options.repeatTimes : myOptions.rT = 1;
  'additionRepeatTimes' in options ? myOptions.aRT = options.additionRepeatTimes : myOptions.aRT = 1;
  
  let firstPart = `${str}${myOptions.add}`;
  for (let i = 2; i <= myOptions.aRT; i++) {
    firstPart += `${myOptions.addSep}${myOptions.add}`;
  }

  const result = [];
  result.push(firstPart)

  let secondPart = `${myOptions.sep}${firstPart}`
  for (let i = 2; i <= myOptions.rT; i++) {
    result.push(secondPart)
  }
  return result.join('');
}

module.exports = {
  repeater
};
