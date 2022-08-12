/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (arr) {
  let arrs = arr.map((item) => {
      return parseInt(item) ? 1 : 0
    }),
    L = 0,
    R = arrs.length - 1
  ;(nums1 = 0), (nums0 = 0)
  for (let i of arrs) {
    if (i) nums1++
    else nums0++
  }
  while (L < R && nums1 == nums0) {
    if (nums1 > nums0) {
      if (arrs.indexOf(1) < arrs.reverse().indexOf(1)) {
        L++
        arr = arr.slice(L, R)
      } else {
        R--
        arr = arr.slice(L, R)
      }
    } else {
      if (arrs.indexOf(0) < arrs.reverse().indexOf(0)) {
        L++
        arr = arr.slice(L, R)
      } else {
        L--
        R++
        arr = arr.slice(L, R)
      }
    }
  }
  return arrs
}

let arr = [
  "A",
  "1",
  "B",
  "C",
  "D",
  "2",
  "3",
  "4",
  "E",
  "5",
  "F",
  "G",
  "6",
  "7",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
]
console.log(findLongestSubarray(arr))
