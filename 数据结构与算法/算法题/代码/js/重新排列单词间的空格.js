/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let arr = text.match(/(\w){1,}/g),
    len = text.length - arr.join("").length,
    str = "",
    endStr = "",
    end,
    num
  if (arr.length >= 2) {
    end = len % (arr.length - 1)
    num = (len - end) / (arr.length - 1)
  } else {
    end = len
    num = 0
  }
  for (let i = 0; i < num; i++) {
    str += " "
  }
  for (let i = 0; i < end; i++) {
    endStr += " "
  }
  return arr.join(str) + endStr
}
let text = "hello   world"
console.log(reorderSpaces(text))
