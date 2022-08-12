/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let nums = s.match(/\d/g),
    aph = s.match(/\D/g),
    res = ""
  let numLen = nums?.length || 0,
    aphLen = aph?.length || 0
  if (numLen - aphLen > 1 || numLen - aphLen < -1) return res
  if (numLen >= aphLen)
    for (let i in nums) {
      res += (nums?.[i]||"") + (aph?.[i] || "")
    }
  else
    for (let i in aph) {
      res +=  (aph?.[i] || "") + (nums?.[i] || "")
    }
  return res
}
let s = "j"
console.log(reformat(s))
