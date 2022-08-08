/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  words.sort((a, b) => {
    return a.length - b.length
  })
  let res = [],
    L = 0,
    R = words.length - 1,
    len = words.length
  while (L < len - 1) {
    if (judgeStringMatche(words[L], words[R])) {
      console.log(L, R)
      console.log(words[L], words[R])
      res.push(words[L])
      L++
      R = len - 1
      continue
    } else {
      if (R - L == 1) {
        L++
        R = len - 1
        continue
      }
    }
    R--
  }
  return res
}
var judgeStringMatche = function (str1, str2) {
  return str2.search(str1) == -1 ? false : true
}
let words = ["blue", "green", "bu"]
console.log(stringMatching(words))
console.log(judgeStringMatche("bu", "blue"))
