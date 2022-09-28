/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let arr = people.sort((a, b) => {
    return a - b
  })
  let result = 0
  let L = 0,
    R = arr.length - 1
  while (L <= R) {
    if (arr[R] == limit || arr[R] + arr[L] > limit) {
      R--
      result++
    } else if (arr[R] + arr[L] <= limit) {
      R--
      L++
      result++
    } else {
      console.log("else")
    }
  }
  return result
}
let people = [3, 2, 2, 1],
  limit = 3
console.log(numRescueBoats(people,limit))
