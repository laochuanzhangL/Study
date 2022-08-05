/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  let len = nums.length
  if (len === 1) return nums[0]
  nums = nums.sort((a, b) => {
    return a - b
  })
  let sum = 0,
    R = len - 1,
    rsum = 0,
    res = []
  for (let i = 0; i < len; i++) sum += nums[i]
  while (sum >= rsum) {
    sum -= nums[R]
    rsum += nums[R]
    res.push(nums[R])
    R--
  }
  return res
}
let nums = [6]
console.log(minSubsequence(nums))
