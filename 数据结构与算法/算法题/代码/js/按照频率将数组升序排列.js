var frequencySort = function (nums) {
  let map = new Map(),
    len = nums.length,
    arr = [],
    res = []
  for (let i = 0; i < len; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  for (let [key, val] of map) {
    arr.push([key, val])
  }
  arr.sort((a, b) => {
    if (a[1] == b[1]) return b[0] - a[0]
    return a[1] - b[1]
  })
  for (let item of arr) {
    for (let i = 0; i < item[1]; i++) {
      res.push(item[0])
    }
  }
  return res
}
let nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
console.log(frequencySort(nums))
