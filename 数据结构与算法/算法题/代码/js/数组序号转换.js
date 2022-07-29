/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let rightArr = [...arr].sort((a, b) => {
    return a - b
  })
  let obj = {},
    len = arr.length,
    tip = 0,
    k = 0
  while (k < len) {
    if (!obj[rightArr[k]]) {
      obj[rightArr[k]] = tip + 1
      tip++
    }
    k++
  }
  for (let i = 0; i < len; i++) {
    arr[i] = obj[arr[i]]
  }
  return arr
}
let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]
console.log(arrayRankTransform(arr))
