/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let len = nums.length,
    idx = 0,
    val = 0
  nums.sort((a, b) => {
    return a - b
  })
  console.log(nums)
  while (val <= len) {
    while (val <= nums[idx]) {
      if (len === val) return val
      val++
    }
    len--
    idx++
  }
  return -1
}
console.log(specialArray([3,6,7,7,0]))
