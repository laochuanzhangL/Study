/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  console.log(nums)
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) return i
  }
}
console.log(missingNumber([0, 1]))
