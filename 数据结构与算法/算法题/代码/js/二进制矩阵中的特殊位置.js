/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let row = [],
    col = [],
    rowMap = new Map(),
    colMap = new Map(),
    res = 0
  for (let i in mat) {
    for (let j in mat[i]) {
      if (mat[i][j] == 1) {
        row.push(i)
        col.push(j)
        if (rowMap.get(i)) {
          rowMap.set(i, rowMap.get(i) + 1)
        } else {
          rowMap.set(i, 1)
        }
        if (colMap.get(j)) {
          colMap.set(j, colMap.get(j) + 1)
        } else {
          colMap.set(j, 1)
        }
      }
    }
  }
  for (let i in row) {
    if (rowMap.get(row[i]) === 1 && colMap.get(col[i]) === 1) {
      res++
    }
  }
  return res
}
let mat = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
]

console.log(numSpecial(mat))
