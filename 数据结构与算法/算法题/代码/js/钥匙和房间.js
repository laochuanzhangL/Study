/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let num = 0,
    keys = rooms[num],
    len = rooms.length,
    closeRooms = []
  for (let i = 0; i < len; i++) {
    closeRooms.push(i || -1)
  }
  while (judge(closeRooms, keys)) {
    if (keys.length == 0) {
      keys = rooms[num]
      closeRooms[num] = -1
    } else {
      num = keys.pop()
      keys = [...rooms[num], ...keys]
      closeRooms[num] = -1
    } 
  }
  return [...new Set(closeRooms)].length == 1
}
var judge = function (rooms, keys) {
  for (let i of keys) {
    if (rooms.includes(i)) return true
  }
  return false
}

let rooms = [[1], [2], [3], []]
console.log(canVisitAllRooms(rooms))
