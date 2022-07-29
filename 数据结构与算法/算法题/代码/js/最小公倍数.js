let getMinMultiple = function (arr) {
  let temp = arr.sort((a, b) => {
    return a - b
  })
  let len = temp.length
  let max = temp[len - 1]
  for (let i = max; ; i++) {
    for (let j = 0; j < len; j++) {
      if (i % temp[j] !== 0) {
        break
      }
      if (j == len - 1 && i % temp[j] == 0) return i
    }
  }
}
console.log(getMinMultiple([1,2,3,4,5,6,7,8,9,10]))
