/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function (s1, s2) {
    return s1.split("").sort().join("") === s2.split("").sort().join("")
  }
let s1 = "abc",
  s2 = "bca"
console.log(CheckPermutation(s1, s2))
