/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let len = nums.length,
    r = [],
    l = []
  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) l.push(nums[i])
    else r.push(nums[i])
  }
  r.sort((a, b) => {
    return a - b
  })
  l.sort((a, b) => {
    return b - a
  })
  let rmax = r[r.length - 1] * r[r.length - 2] * r[r.length - 3]
  let lmax = l[0] * l[1] * l[2]
  if (l.length < 2) return rmax
  if ((r.length == 0)) return lmax
  return Math.max(rmax||0, r[r.length - 1] * l[l.length - 1] * l[l.length - 2])
}
let nums = [-1,-2,-3,-4]
console.log(maximumProduct(nums))
