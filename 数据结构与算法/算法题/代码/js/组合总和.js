/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => {
    return a - b
  })
  if (candidates[0] > target) return []
  let res = []
  let backtracking = (idx, arr, target) => {
    if (idx === candidates.length) return
    if (target === 0) {
      res.push(arr)
      return
    }
    if (target - candidates[idx] >= 0) {
      backtracking(idx, [...arr, candidates[idx]], target - candidates[idx])
    }
    backtracking(idx + 1, arr, target)
  }
  backtracking(0, [], target)
  return res
}
let candidates = [2, 3, 6, 7],
  target = 7
console.log(combinationSum(candidates, target))
