/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [],
    left = ["{", "[", "("]
  right = ["}", "]", ")"]
  for (let i of s) {
    console.log(i)
    if (left.includes(i)) stack.push(i)
    else {
      let temp = stack.pop()
      if (right.indexOf(i) !== left.indexOf(temp)) return false
    }
  }
  if (stack.length) return false
  return true
}
let s = "(]"
console.log(isValid(s))
// switch (i) {
//     case "(":
//       a++
//       continue
//     case ")":
//       if (!a || b || c) return false
//       a--
//       continue
//     case "[":
//       b++
//       continue
//     case "]":
//       if (!b || a ||c) return false
//       b--
//       continue
//     case "{":
//       c++
//       continue
//     case "}":
//       if (b || a || !c) return false
//       c--
//       continue
//     default:
//       return false
//   }
