/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  let x1 = getLength(p1, p2)
  let x2 = getLength(p2, p3)
  let x3 = getLength(p3, p4)
  let x4 = getLength(p1, p4)
  let x5 = getLength(p1, p3)
  let x6 = getLength(p2, p4)
  if (!(x1 && x2 && x3 && x4 && x5 && x6)) {
    return false
  }
  let arr = [x1, x2, x3, x4, x5, x6]
  arr.sort((a, b) => {
    return a - b
  })
  if(arr[5]!=arr[0]*2)return false
  if (
    (arr[0] == arr[1] && arr[2] == arr[3] && arr[2] == 2 * arr[0]) ||
    arr[0] == arr[3]
  )
    return true
  return false
}
var getLength = function (a, b) {
  return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
}
console.log(validSquare([0, 0], [-1, 1], [0, 1], [1, 0]))
