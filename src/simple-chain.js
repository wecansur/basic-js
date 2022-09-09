const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
   this.chain.push(`( ${value} )`);
   return this;
  },
  removeLink(position) {
   this.chain = this.chain.filter((_, index) => index !== position - 1);
   return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    return this.chain.join('~~')
  }
};

module.exports = {
  chainMaker
};
