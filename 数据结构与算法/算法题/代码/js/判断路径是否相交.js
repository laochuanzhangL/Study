/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0,
    y = 0,map=[]
  map.push(x + " " + y)
  for (let i of path) {
    switch (i) {
      case "N":
        y++
        break
      case "S":
        y--
        break
      case "E":
        x++
        break
      case "W":
        x--
        break
    }
    if (map.includes(x + " " + y)) return true
    map.push(x + " " + y)
  }
  return false
}
let path = "ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"
console.log(isPathCrossing(path))
