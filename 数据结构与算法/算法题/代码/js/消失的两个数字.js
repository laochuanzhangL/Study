/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  nums = nums.concat([-1, -1])
  let len = nums.length,
    res = []
  for (let i = 0; i < len; i++) {
    while (nums[i] != -1 && nums[i] != i + 1) {
      let temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] == -1) res.push(i + 1)
  }
  return res
}
console.log(missingTwo([2, 3]))
