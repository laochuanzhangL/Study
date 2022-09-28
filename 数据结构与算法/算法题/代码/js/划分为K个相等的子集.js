/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  if (k === 1) return true
  let sum = nums.reduce((pre, cur) => pre + cur, 0)
  let len = nums.length
  let mark = new Array(len).fill(1)
  if (sum % k !== 0) return false
  let target = sum / k
  nums.sort((a, b) => {
    return a - b
  })
  if (nums[len] > k) return false
  return judge(nums, len - 1, k, 0, target)
  function judge(nums, start, k, current, target) {
    if (k == 1) return true
    if (current === target)
      return judge(nums, nums.length - 1, k - 1, 0, target)
    for (let i = start; i > 0; i--) {
      if (mark[i] == 0 || current + nums[i] > target) continue
      mark[i] = 0
      if (judge(nums, start - 1, k, current + nums[i], target)) return true
      mark[i] = 1
      while (i > 0 && nums[i] == nums[i - 1]) i--
    }
    return false
  }
}
let nums = [
    3522, 181, 521, 515, 304, 123, 2512, 312, 922, 407, 146, 1932, 4037, 2646,
    3871, 269,
  ],
  k = 5
console.log(canPartitionKSubsets(nums, k))
