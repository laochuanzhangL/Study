/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  let len = nums.length,
    sumLimit = limit << 1,
    arr = new Array(sumLimit + 2).fill(0)

  for (let i = 0; i < len / 2; i++) {
    let max = Math.max(nums[i], nums[len - 1 - i])
    let min = Math.min(nums[i], nums[len - 1 - i])
    let sum = max + min
    arr[2] += 2
    arr[sum] -= 1
    arr[sum + 1] += 1
    arr[min + 1] -= 1
    arr[max + 1 + limit] += 1
  }
  let res = len
  for (let i = 2; i <= sumLimit; i++) {
    arr[i] += arr[i - 1]
    res = Math.min(res, arr[i])
  }
  return res
}

let nums = [1, 2, 2, 1],
  limit = 2
console.log(minMoves(nums, limit))
