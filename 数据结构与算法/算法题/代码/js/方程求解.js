/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  let arrs = equation.split("="),
    con = 0,
    nums = 0
  let left = getAllMsg(arrs[0]),
    right = getAllMsg(arrs[1])
  for (let i in left[0]) {
    if (left[0][i][left[0][i].length - 1] == "x") {
      if (left[0][i].slice(0, left[0][i].length - 1) !== '0')
        if (left[1][i] == "+") {
          con += parseInt(left[0][i].slice(0, left[0][i].length - 1)) || 1
        } else {
          con -= parseInt(left[0][i].slice(0, left[0][i].length - 1)) || 1
        }
    } else {
      if (left[1][i] == "+") {
        nums += parseInt(left[0][i])
      } else {
        nums -= parseInt(left[0][i])
      }
    }
  }
  for (let i in right[1]) {
    if (right[0][i][right[0][i].length - 1] == "x") {
      if (right[0][i].slice(0, right[0][i].length - 1) !== '0')
        if (right[1][i] == "-") {
          con += parseInt(right[0][i].slice(0, right[0][i].length - 1)) || 1
        } else {
          con -= parseInt(right[0][i].slice(0, right[0][i].length - 1)) || 1
        }
    } else {
      if (right[1][i] == "-") {
        nums += parseInt(right[0][i])
      } else {
        nums -= parseInt(right[0][i])
      }
    }
  }
  if (con === 0 && nums !== 0) return "No solution"
  else if (con === 0 && nums === 0) return "Infinite solutions"
  else return `x=${-nums / con}`
}
var getAllMsg = function (str) {
  let reg = /\+|\-/g
  let nums = str.split(reg)
  if (!nums[0]) nums.shift()
  let symbols = str.match(reg) || []
  if (str[0] !== "-") symbols.unshift("+")
  return [nums, symbols]
}
let equation = "0x=0"
console.log(solveEquation(equation))
getAllMsg("3x+5-3+x")
