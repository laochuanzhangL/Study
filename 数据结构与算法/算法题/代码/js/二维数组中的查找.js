/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  let n = matrix.length,
    m = matrix[0].length,
    mark = new Array(n)
  for (let i = 0; i < n; i++) {
    mark[i] = new Array(m).fill(1)
  }
  const dp = (matrix, target, x, y, mark) => {
    if (mark[x][y] === 0) return false
    if (matrix[x][y] == target) return true
    if (matrix[x][y] > target) return false
    mark[x][y] = 0
    if (x < n - 1 && y < m - 1) {
      return (
        dp(matrix, target, x + 1, y, mark) || dp(matrix, target, x, y + 1, mark)
      )
    } else if (y < m - 1) {
      return dp(matrix, target, x, y + 1, mark)
    } else if (x < n - 1) {
      return dp(matrix, target, x + 1, y, mark)
    } else return false
  }
  return dp(matrix, target, 0, 0, mark)
}
console.log(findNumberIn2DArray([[-5]], -3))
