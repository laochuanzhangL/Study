/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = ""
  let len = strs.length
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < len; i++) {
      if (i === 0 || !result.length) {
        result += strs[i][j]
        continue
      }
      if (result[j] !== strs[i][j]) {
        return result.slice(0, -1);
      }
      result[j] == strs[i][j]
    }
  }
  return result
}
let arr = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(arr))
