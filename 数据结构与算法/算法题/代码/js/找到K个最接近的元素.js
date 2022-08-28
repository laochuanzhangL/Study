/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let idx
  if (x <= arr[0]) idx = 0
  else if (x >= arr[arr.length - 1]) idx = arr.length - 1
  else {
    for (let i in arr) {
      if (arr[i] >= x) {
        idx = i
        break
      }
    }
  }

  let l = idx - 1,
    r = idx,
    res = []
  while (res.length < k) {
    console.log(l, r)
    if (l >= 0 && r < arr.length) {
      console.log(arr[l], arr[r])
      let temp = arr[r] - x >= x - arr[l] ? arr[l--] : arr[r++]
      res.push(temp)
    } else {
      if (l < 0) {
        res.push(arr[r++])
      } else if (r == arr.length) {
        res.push(arr[l--])
      }
    }
    console.log(res)
  }
  return res.sort((a, b) => {
    return a - b
  })
}
let arr = [3, 5, 8, 10],
  k = 2,
  x = 15

console.log(findClosestElements(arr, k, x))
