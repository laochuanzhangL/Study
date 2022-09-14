/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let str = (num + "").split(""),
    len = str.length,
    i = 0
  while (i < len) {
    let target = [str[i], i]
    for (let j = i + 1; j < len; j++) {
      if (str[j] >= target[0]) target = [str[j], j]
    }
    if (target[1] !== i && target[0] !== str[i]) {
      let temp = str[target[1]]
      str[target[1]] = str[i]
      str[i] = temp
      break
    }
    i++
  }
  return parseInt(str.join(""))
}
console.log(maximumSwap(99732784671823))
