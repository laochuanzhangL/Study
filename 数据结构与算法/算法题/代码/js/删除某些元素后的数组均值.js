/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  let len = arr.length,
    l = len * 0.05 - 1,
    r = len - l - 1,
    sum = 0
  arr.sort((a, b) => {
    return a - b
  })

  for (let i = l + 1; i < r; i++) {
    sum += parseInt(arr[i])
  }
  return sum / (r - l - 1)
}
let arr =[9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]



console.log(trimMean(arr))
