const quickSort = (arr) => {
  let len = arr.length
  //结束递归
  if (len <= 1) return arr

  //找到中间项，并在原数组移除
  let midIndex = len >> 1
  let midValue = arr.splice(midIndex, 1)[0]

  //准备两个新数组，比中间项小的放左边，大的放右边
  let left = [],
    right = []
  for (let i = 0; i < len - 1; i++) {
    arr[i] <= midValue ? left.push(arr[i]) : right.push(arr[i])
  }
  //递归循环，然后两边都这样处理，知道只剩下一个元素再返回
  return quickSort(left).concat(midValue, quickSort(right))
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time("快速排序耗时")
console.log("arr :", quickSort(arr))
console.timeEnd("快速排序耗时")
