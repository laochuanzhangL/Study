/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let reg = new RegExp(`${searchWord}`),arr=sentence.split(' ')
  console.log(arr)
  for(let i in arr){
    
    if(arr[i].search(reg)===0)
    return ++i
  }
  return -1
}
let sentence = "hellohello hellohellohello", searchWord ="ell"
console.log(isPrefixOfWord(sentence, searchWord))
