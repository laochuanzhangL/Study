/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let res = new Array(n).fill(0),
    stack = [],
    arr = logs.map((item) => {
      return item.split(":")
    })
  for (let item of arr) {
    if (item[1] == "start") {
      if (stack.length) {
        res[stack[stack.length - 1][0]] +=
          parseInt(item[2]) - stack[stack.length - 1][1]
      }
      stack.push([parseInt(item[0]), parseInt(item[2])])
    } else {
      let temp = stack.pop()
      res[parseInt(temp[0])] += parseInt(item[2]) - temp[1] + 1
      if(stack.length){
        stack[stack.length-1][1]=parseInt(item[2])+1
      }
    }
  }
  return res
}
let n = 2,
  logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]
console.log(exclusiveTime(n, logs))
