var canFormArray = function (arr, pieces) {
  let len = arr.length,
    i = 0
  a: while (i < len) {
    let temp = arr[i]
    console.log(i, arr, pieces)
    for (let j in pieces) {
      console.log(pieces[j][0], temp)
      if (temp === pieces[j][0]) {
        for (let val of pieces[j]) {
          if (val !== arr[i]) {
            return false
          }
          i++
        }
        continue a
      }
    }
    return false
  }
  return true
}
let arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
console.log(canFormArray(arr, pieces))
