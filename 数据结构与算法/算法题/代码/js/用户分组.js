/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let sizeMap = new Map(),
    res = []
  for (let i in groupSizes) {
    if (!sizeMap.get(groupSizes[i])) {
      sizeMap.set(groupSizes[i], [])
    }
    sizeMap.get(groupSizes[i]).push(parseInt(i))
  }
  for (let [size, point] of sizeMap.entries()) {
    let con = point.length / size
    let temp = []
    let j = 0
    let i = 0
    while (j < con) {
      temp[j] = []
      for (let k = 0; k < size; k++) {
        // console.log(j)
        temp[j].push(point[i])
        console.log(j, temp[j])
        i++
      }
      j++
    }

    res.push(temp)
  }
  return res.flat(1)
}
let groupSizes = [3, 3, 3, 3, 3, 1, 3]
console.log(groupThePeople(groupSizes))
