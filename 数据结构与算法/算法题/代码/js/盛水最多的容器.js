/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length,
    r = len - 1,
    l = 0,
    v = (r - l) * Math.min(height[l], height[r])
  while (l < r) {
    if (height[l] < height[r]) {
      l++
    } else r--
    v = Math.max(v, (r - l) * Math.min(height[l], height[r]))
  }
  return v
}
let height = [1, 3, 2, 5, 25, 24, 5]
console.log(maxArea(height))
