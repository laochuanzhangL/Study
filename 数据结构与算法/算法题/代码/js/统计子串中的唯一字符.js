/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  let res = 0,
    map = new Map()
  len = s.length
  for (let i = 0; i < len; i++) {
    let val = s[i]
    if (!map.get(val)) {
      map.set(val, [])
      map.get(val).push(-1)
    }
    map.get(val).push(i)
  }
  for (let [_, arr] of map.entries()) {
    arr.push(s.length)
    for (let i = 1; i < arr.length - 1; i++) {
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i])
    }
  }
  return res
}
console.log(uniqueLetterString("LEETCODE"))
