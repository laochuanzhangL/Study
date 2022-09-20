/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) {
    return nums[0]
  }
  let len = nums.length,
    dp = new Array(len).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return Math.max(dp[len - 1], dp[len - 2])
}
let nums = [2,1,1,2]
console.log(rob(nums))
