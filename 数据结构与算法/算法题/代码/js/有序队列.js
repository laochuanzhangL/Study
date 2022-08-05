/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  if (k === 1) {
    let len = s.length
    let i = 0,
      minStr = s
    while (i < len) {
      s = s.substring(1).concat(s[0])
      minStr = minStr < s ? minStr : s
      i++
    }
    return minStr
  }
  return [...s].sort().join("")
}

let s = "cba"
let k = 1
console.log(orderlyQueue(s, k))
