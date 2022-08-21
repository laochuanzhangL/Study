/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let k = 1,
    one = findOne(s, 0),
    zero = s[0]=='0' ? 1 : 0
    console.log(zero)
  res = one + zero
  while (k < s.length-1) {
    if (s[k] == 0) zero++
    one = findOne(s, k)
    res = Math.max(res, one + zero)
    k++
  }
  return res
}

var findOne = function (s, i) {
  let res = 0
  for (i++; i < s.length; i++) {
    if (s[i] == 1) res++
  }
  return res
}
let s = "00"
console.log(maxScore(s))
