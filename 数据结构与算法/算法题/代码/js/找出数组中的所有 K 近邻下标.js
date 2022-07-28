/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  let arr = []
  let result = []
  while (nums.includes(key)) {
    let temp = nums.indexOf(key)
    arr.push(temp)
    nums[temp] = 0.5
  }
  for (let idx in nums) {
    for (let value of arr) {
      if (Math.abs(idx - value) <= k) {
        result.push(idx)
        break
      }
    }
  }
  return result
} 
let nums = [3, 4, 9, 1, 3, 9, 5]
let key = 9
let k = 1
console.log(findKDistantIndices(nums, key, k))
