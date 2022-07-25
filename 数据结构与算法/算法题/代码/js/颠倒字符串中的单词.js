/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.trim().split(' ').reverse().filter(item=>item!='').join(' ') 
};
let arr="a good   example"
console.log(reverseWords(arr))