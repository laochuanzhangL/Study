/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [],
    i = 0,
    j = 0
  while (i < pushed.length || j < popped.length) {
    if (stack[stack.length - 1] == popped[j]) {
      stack.pop()
      j++
    } else {
      if (i < pushed.length) {
        if (popped[j] !== pushed[i]) {
          stack.push(pushed[i])
          i++
        } else {
          j++
          i++
        }
      } else {
        let temp = stack.pop()
        if (temp !== popped[j]) return false
        j++
      }
    }
  }
  return true
}
let pushed = [2, 1, 0],
  popped = [1, 2, 0]
console.log(validateStackSequences(pushed, popped))
