/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])
  let res = 0,
    dp = [],
    len = nums.length
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1], res)
  }
  return Math.max(dp[len - 1], dp[len - 2])
}
console.log(rob([2, 7, 9, 3, 1]))
