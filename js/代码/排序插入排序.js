const insertSort = (arr) => {
  let result = [arr[0]],
    len = arr.length
  for (let i = 1; i < len; i++) {
    let current = arr[i]
    if (current >= result[result.length - 1]) {
      result.push(current)
      continue
    }
    for (let j = 0; j < result.length; j++) {
      if (current <= result[j]) {
        console.log(result, j, 0)
        result.splice(j, 0, current)
        console.log(result, j, 1)
        break
      }
    }
  }
  return result
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time("插入排序耗时")
console.log("arr :", insertSort(arr))
console.timeEnd("插入排序耗时")
