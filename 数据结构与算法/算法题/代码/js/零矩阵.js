/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = new Set(),
    columns = new Set(),
    len = matrix.length,
    len2 = matrix[0].length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] === 0) {
        columns.add(j)
        rows.add(i)
      }
    }
  }
  console.log(columns, rows)
  for (let i of columns.values()) {
    for (let j = 0; j < len; j++) {
      matrix[j][i] = 0
    }
  }
  for (let i of rows.values()) {
    for (let j = 0; j < len2; j++) {
      matrix[i][j] = 0
    }
  }
  return matrix
}
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
)
