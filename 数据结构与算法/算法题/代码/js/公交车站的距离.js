/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let goRight = 0,
    goLeft = 0
  let len = distance.length
  if (start > destination) {
    let temp = start
    start = destination
    destination = temp
  }
  let startTemp = start
  while (startTemp < destination) {
    goRight += distance[startTemp++]
  }
  while (start != destination) {
    goLeft += distance[destination++]
    if (destination == len) destination = 0
  }
  return Math.min(goRight, goLeft)
}
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2))
