/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  if (s.length <= 2) return s
  let tip = 0,
    arr = [],
    left = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) {
      tip++
    } else {
      tip--
      if (tip == 0) {
        arr.push("1" + makeLargestSpecial(s.substring(left + 1, i)) + "0")
        left = i + 1
      }
    }
  }
  arr.sort().reverse()
  return arr.join("")
}

let s = "1010101100"
console.log(makeLargestSpecial(s))
