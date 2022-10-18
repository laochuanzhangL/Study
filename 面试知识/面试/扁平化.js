let arr = [
  [1, 2, 3],
  [[[1, 2], 3], 4],
]
function dp(arr) {
  let res = []
  for (let i in arr) {
    if (arr[i].constructor === Array) {
      res = [...res, ...dp(arr[i])]
    } else res.push(arr[i])
  }
  return res
}
console.log(dp(arr))
