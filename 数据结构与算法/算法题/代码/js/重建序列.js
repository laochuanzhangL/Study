/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
 var sequenceReconstruction = function (nums, sequences) {
    let map = new Map()
    let len = nums.length
    for (let i = 1; i < len; i++) {
      map.set(nums[i - 1], nums[i])
    }
    let tips = new Array(len + 1).fill(0)
    for (let s of sequences) {
      for (let i = 1; i < s.length; i++) {
        if (map.get(s[i - 1]) == s[i]) {
          tips[s[i]]=1
        }
      }
    }
    let sum = 0
    for (let i = 0; i < tips.length; i++) {
      sum += tips[i]
    }
  
    return sum == len - 1
  }
let nums = [4, 1, 5, 2, 6, 3]

let sequences = [
  [5, 2, 6, 3],
  [4, 1, 5, 2],
]

console.log(sequenceReconstruction(nums, sequences))
