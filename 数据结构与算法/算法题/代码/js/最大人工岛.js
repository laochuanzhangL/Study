/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  let res = 0,
    len = grid.length,
    visited = new Array(len),
    mark = new Array(len),
    dir = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ],
    p = 1,
    map = [],
    tip = 0
  for (let i = 0; i < len; i++) {
    visited[i] = new Array(len).fill(false)
    mark[i] = new Array(len).fill(0)
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (!visited[i][j]) {
        map[p] = dfs(i, j, p)
        p++
      }
    }
  }
  for (let x = 0; x < len; x++) {
    for (let y = 0; y < len; y++) {
      if (!visited[x][y]) {
        tip++
        let set = new Set(),
          temp = 0
        for (let i = 0; i < 4; i++) {
          nextx = x + dir[i][0]
          nexty = y + dir[i][1]
          if (nextx < 0 || nexty < 0 || nextx >= len || nexty >= len) continue
          set.add(mark[nextx][nexty])
        }
        set.delete(0)
        console.log(set, map)
        for (let key of set) {
          temp += map[key]
        }
        res = Math.max(res, temp)
      }
    }
  }
  return tip == 0 ? len ** 2 : tip === len ** 2 ? 1 : res + 1
  function dfs(x, y, p) {
    if (visited[x][y] || grid[x][y] == 0) return 0
    visited[x][y] = true
    mark[x][y] = p
    console.log(mark)
    let area = 1
    for (let i = 0; i < 4; i++) {
      nextx = x + dir[i][0]
      nexty = y + dir[i][1]
      if (nextx < 0 || nexty < 0 || nextx >= len || nexty >= len) continue
      area += dfs(nextx, nexty, p)
    }
    return area
  }
}
console.log(
  largestIsland([
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
  ])
)
