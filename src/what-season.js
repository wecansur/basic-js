const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

/*
spring = 2, 3, 4
summer = 5, 6, 7
autumn = 8, 9, 10
winter = 11, 0, 1
*/
function getSeason(date) {
  const month = date.getMonth();
  if (month === 11 || month <= 1) {
    return 'winter';
  } else if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month > 4 && month <= 7) {
    return 'summer';
  } else if (month > 7 && month <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
