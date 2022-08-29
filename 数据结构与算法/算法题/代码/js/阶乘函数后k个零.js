var trailingZeroes = function (n) {
  /*  阶乘后的零 */
  let res = 1
  for (let d = n; d / 5 > 0; d = d / 5) {
    res += Math.floor(d / 5)
  }
  return res
}
var preimageSizeFZF = function (k) {
  let min = 0,
    max = k + 1
  // 左闭右开
  while (min < max) {
    let mid = min + ((max - min) >> 1)
    let count = trailingZeroes(mid)
    console.log(count)
    if (count > k) {
      max = mid
    } else if (count < k) {
      min = mid + 1
    } else {
      return 5
    }
  }
  return 0
}
console.log(preimageSizeFZF(1))
