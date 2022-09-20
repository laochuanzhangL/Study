/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  let sides = [],
    res = 0n,
    segments = [],
    pre = 0
  for (let rectangle of rectangles) {
    const [x1, y1, x2, y2] = rectangle
    const segment = [y1, y2]
    sides.push({ isLeft: true, x: x1, segment })
    sides.push({ isLeft: false, x: x2, segment })
  }
  sides.sort((a, b) => {
    return a.x - b.x
  })
  for (const { isLeft, x, segment } of sides) {
    if (x != pre) {
      res += getArea(x)
      pre = x
    }
    if (isLeft) {
      insertSegments(segment)
    } else {
      removeSegment(segment)
    }
  }
  return res % 1000000007n
  function insertSegments(segment) {
    const [start, end] = segment
    const i = segments.findIndex(
      (segment) =>
        start < segment[0] || (start == segment[0] && end > segment[1])
    )
    if (i === -1) {
      segments.push(segment)
    } else {
      segments.splice(i, 0, segment)
    }
  }
  function removeSegment(segment) {
    const i = segments.indexOf(segment)
    if (i != -1) {
      segments.splice(i, 1)
    }
  }
  function getArea(x) {
    let combinedSegments = []
    for (const segment of segments) {
      if (combinedSegments.length == 0) {
        combinedSegments.push(segment.slice())
      } else {
        let preSegment = combinedSegments[combinedSegments.length - 1]
        let preEnd = preSegment[1]
        let [start, end] = segment
        if (start > preEnd) {
          combinedSegments.push(segment.slice())
        } else if (start === preEnd) {
          preSegment[1] = end
        } else preSegment[1] = Math.max(end, preEnd)
      }
    }
    let width = BigInt(x - pre)
    return combinedSegments
      .map(([start, end]) => BigInt(end - start))
      .reduce((area, height) => area + width * height, 0n)
  }
}

let rectangles = [
  [0, 0, 3, 3],
  [2, 0, 5, 3],
  [1, 1, 4, 4],
]
console.log(rectangleArea(rectangles))
