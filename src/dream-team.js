const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  } else {
    const upperCaseMembersWithoutWhiteSpaces = [];
    members.forEach((item) => {
      let name = '';
      if (typeof(item) === 'string') {
        for (let i = 0; i < item.length; i++) {
          if(item[i] !== ' ') {
            name += item[i].toUpperCase();
        }
      }
      upperCaseMembersWithoutWhiteSpaces.push(name);
    }
    })
    upperCaseMembersWithoutWhiteSpaces.sort();
    let result = '';
    upperCaseMembersWithoutWhiteSpaces.forEach((item) => {
      result += item[0];
    })
    return result;
  } 
}

module.exports = {
  createDreamTeam
};
