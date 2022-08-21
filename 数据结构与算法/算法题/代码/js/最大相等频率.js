/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  let res = 1,
    map = new Map(),
    R = nums.length
  for (let i of nums) {
    if (!map.get(i)) map.set(i, 1)
    else {
      let temp = map.get(i) + 1
      map.set(i, temp)
    }
  }
  while (!judgeMap(map) && nums.length > 0) {
    let i = nums.pop()
    let temp = map.get(i) - 1
    if (temp == 0) map.delete(i)
    else map.set(i, temp)
  }
  return nums.length
}
var judgeMap = function (map) {
  let arr = new Map()
  for (let [key, value] of map.entries()) {
    if (!arr.get(value)) arr.set(value, 1)
    else {
      let temp = arr.get(value) + 1
      arr.set(value, temp)
    }
  }
  console.log(arr)
  let values = [...arr.values()]
  let keys=[...arr.keys()]
  if (arr.size > 2) return false
  if (arr.size == 1 && (values[0] == 1||keys[0]==1)) return true
if(arr.get(1)==1)return true
  if ((values[0] == 1&&keys[0]-1==keys[1]) ||Math.abs(values[1] == 1&&keys[1]-1==keys[0])) return true
}
nums =
[1,2]
console.log(maxEqualFreq(nums))
