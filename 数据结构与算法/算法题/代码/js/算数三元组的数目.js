/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let result = 0,
    len = nums.length
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (nums[j] - nums[i] !== diff) {
        continue
      }
      for (let k = j + 1; k < len; k++) {
        if (nums[k] - nums[j] == diff) {
          result++
        }
      }
    }
  }
  return result
}

let nums = [0, 1, 4, 6, 7, 10],
  diff = 3
console.log(arithmeticTriplets(nums, diff))
