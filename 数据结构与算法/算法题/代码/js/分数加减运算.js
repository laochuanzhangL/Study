/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    let  reg=/(\-)?[1-9]([1])?/g
    return reg.match(expression)
};
let str="-1/2+1/2"
console.log( fractionAddition(str))