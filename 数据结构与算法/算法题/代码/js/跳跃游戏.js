/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cur = nums[0],
    len = 1,
    temp = 1
  for (let i = 1; i < nums.length; i++) {
    if (cur == 0) return false
    if (nums[i] >= cur - temp) {
      cur = nums[i]
      len += temp
      temp = 1
    } else {
      temp++
    }
  }
  console.log(len, cur)
  return cur + len >= nums.length
}
let nums = [2, 3, 1, 1, 4]
console.log(canJump(nums))
