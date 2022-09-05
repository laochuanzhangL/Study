/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word) return true
  if (word.toLowerCase() === word) return true
  if (word[0].toUpperCase().concat(word.slice(1).toLocaleLowerCase()) === word) return true
  return false
}
let word = "aasB"
console.log(detectCapitalUse(word))
