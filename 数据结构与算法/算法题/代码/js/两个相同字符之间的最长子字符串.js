/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let res = -1
  for (let i in s) {
    let target = s.lastIndexOf(s[i])
    if (target === -1) continue
    if (target != i) {
      console.log(target - i - 1)
      res = Math.max(res, target - i - 1)
    }
  }
  return res
}
console.log(maxLengthBetweenEqualCharacters("ojdncpvyneq"))
