/**
 * @param {number[]} nums
 * @return {number}
 */
Array.prototype.delete = function (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}
var judge = function (a, b) {
  let min = Math.min(a, b)
  for (let i = 2; i <= min; i++) {
    if (a % i == 0 && b % i == 0) return true
  }
  return false
}
var arrJudge = function (a, b) {
  let lena = a.length,
    lenb = b.length
  for (let i = 0; i < lena; i++) {
    for (let j = 0; j < lenb; j++) {
      if (judge(a[i], b[j])) return true
    }
  }
  return false
}
var largestComponentSize = function (nums) {
  if (nums.includes(1)) nums.delete(1)
  let result = 0,
    max = 1,
    tips = 0,
    temp = true,
    isFull = false
  let arr = []
  while (true) {
    arr.push(nums[0])
    nums.delete(nums[0])
    while (arrJudge(nums, arr) && temp) {
      let i = 0
      for (i; i < nums.length; i++) {
        if (i == nums.length - 1) isFull = true
        for (let j = tips; j < arr.length; j++) {
          if (judge(nums[i], arr[j])) {
            if (!arr.includes(nums[i])) {
              arr.push(nums[i])
              nums.delete(nums[i])
              max++
            }
          }
        }
      }
    }
    result = Math.max(result, max)
    if (max == 1 && isFull) return result
    tips = arr.length
    max = 1
  }
}

nums = [97, 37, 17, 14, 46, 16, 81, 19, 84, 21, 52, 30]
console.log(largestComponentSize(nums))
