/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  if (pairs.length == 0) return 0
  pairs.sort((a, b) => {
    return a[1] - b[1]
  })
  let i = 1,
    res = 1,
    cur = pairs[0]
  while (i < pairs.length) {
    if (pairs[i][0] > cur[1]) {
      res++
      cur = pairs[i]
    }
    i++
  }
  return res
}
console.log(findLongestChain([[1, 2]]))
