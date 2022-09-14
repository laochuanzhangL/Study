/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  let arr = [],
    sumq = 0,
    res = Infinity,
    rate = 0,
    enque = []
  for (let i in quality) {
    arr[i] = [quality[i], wage[i] / quality[i]]
  }
  arr.sort((a, b) => {
    return a[1] - b[1]
  })
  for (let i = 0; i < wage.length; i++) {
    sumq += arr[i][0]
    enque.push(arr[i])
    if (enque.length === k) {
      res = Math.min(sumq * arr[i][1], res)
      sumq -= enque.splice(myArray(enque), 1)[0][0]
    }
  }

  return res
}
let myArray = function (enque) {
  let max = -Infinity
  for (let j = 0; j < enque.length; j++) {
    if (enque[j][0] > max) {
      max = enque[j][0]
      var idx = j
    }
  }
  return idx
}
let quality = [14, 56, 59, 89, 39, 26, 86, 76, 3, 36],
  wage = [90, 217, 301, 202, 294, 445, 473, 245, 415, 487],
  k = 2
console.log(mincostToHireWorkers(quality, wage, k))
