/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let arr = [1],
    tip = 1,
    nums = [],
    j = 1
  for (let i = 2; i <= n; i++) {
    nums.push(i)
  }
  while (k > 1) {
    if (tip == 1) {
      arr[j] = arr[j - 1] + k
      tip = 0
    } else {
      arr[j] = arr[j - 1] - k
      tip = 1
    }
    let index = nums.indexOf(arr[j])
    nums.splice(index, 1)
    k--
    j++
  }
  return arr.concat(nums)
}
console.log(constructArray(5, 4))
