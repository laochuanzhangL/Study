/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var minGroups = function (intervals) {
//   intervals.sort((a, b) => {
//     return a[0] - b[0]
//   })
//   let res = 0
//   while (intervals.length) {
//     let tip = intervals.shift()[1]
//     for (let i = 0; i < intervals.length; i++) {
//       if (intervals[i][0] > tip) {
//         tip = intervals[i][1]
//         intervals.splice(i, 1)
//         i--
//       }
//     }
//     res++
//   }
//   return res
// }
var minGroups = function (intervals) {
  let map = new Map()
  for (let interval of intervals) {
    for (let i = interval[0]; i <= interval[1]; i++) {
      if (map.get(i)) {
        map.set(i, map.get(i) + 1)
      } else map.set(i, 1)
    }
  }
  let arr = [...map.values()]
  arr.sort((a, b) => {
    return a - b
  })
  return arr[arr.length - 1]
}
let intervals = [[1,3],[5,6],[8,10],[11,13]]
console.log(minGroups(intervals))
