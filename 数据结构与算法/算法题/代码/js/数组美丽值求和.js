/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfBeauties = function (nums) {
    let arr = [...nums].sort((a, b) => {
      return a - b
    })
    if (arr[0] == arr[arr.length]) return 0
    let len = nums.length,
      result = 0,
      lmax = nums[0],
      rmin = getMin(nums, 1),
      L = 1
    while (L <= len - 2) {
      if (nums[L] == rmin) rmin = getMin(nums, L + 1)
      if (nums[L] < rmin && nums[L] > lmax) {
        result += 2
      } else {
        if (nums[L] < nums[L + 1] && nums[L] > nums[L - 1]) {
          result += 1
        }
      }
      lmax = Math.max(lmax, nums[L])
      L++
    }
    return result
  }
  let getMin = function (arr, L) {
    let min = Infinity
    for (; L < arr.length; L++) {
      min = Math.min(min, arr[L])
    }
    return min
  }
let nums = [6, 8, 3, 7, 8, 9, 4, 8]
console.log(sumOfBeauties(nums))
