/**
 * @param {string} expression
 * @return {string}
 */
let getMinMultiple = function (arr) {
  let temp = [...arr].sort((a, b) => {
    return a - b
  })
  let len = temp.length
  let max = temp[len - 1]
  for (let i = max; ; i++) {
    for (let j = 0; j < len; j++) {
      if (i % temp[j] !== 0) {
        break
      }
      if (j == len - 1 && i % temp[j] == 0) return i
    }
  }
}
var fractionAddition = function (expression) {
  let reg = /((\-)?[1-9]([0])?\/[1-9]([0])?)/g
  let temp = expression.match(reg),
    sum = 0
  let arr = temp.map((item) => {
    return item.split("/")
  })
  for (let item of arr) {
    item[0] = parseInt(item[0])
    item[1] = parseInt(item[1])
  }
  let dens = arr.map((item) => {
    return item[1]
  })
  let minMultiple = getMinMultiple(dens)
  let mens = arr.map((item, index) => {
    return item[0] * (minMultiple / dens[index])
  })
  for (let value of mens) {
    sum += value
  }
  if (sum == 0) return "0/1"
  let i =Math.abs(sum) 
  while (i >= 2) {
    if (sum % i == 0 && minMultiple % i == 0) {
      sum /= i
      minMultiple /= i
    }
    i--
  }
  return `${sum + "/" + minMultiple}`
}
let str = "-1/4-4/5-1/4"
console.log(fractionAddition(str))
