function mergeSort(arr) {
  let len = arr.length
  if (len < 2) return arr
  let middle = len >> 1
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return marge(mergeSort(left), mergeSort(right))
}
const marge = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift())
    else result.push(right.shift())
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time("归并排序耗时")
console.log("arr :", mergeSort(arr))
console.timeEnd("归并排序耗时")
