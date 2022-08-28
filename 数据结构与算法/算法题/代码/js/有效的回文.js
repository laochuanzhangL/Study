/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.split(" ").join("")
  if (!s) return false
  let reg = /[0-9a-zA-Z]/g
  let arr = s.match(reg)?.map((item) => {
    return item.toLowerCase()
  })||[]
  return arr.join("") === [...arr].reverse().join("").toString()
}
let s = "."
console.log(isPalindrome(s))
