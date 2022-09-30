/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let idx1 = 0,
    idx2 = 0,
    idx3 = 0
  let res = new Array(k).fill(1)
  for (let i = 1; i < k; i++) {
    let min = Math.min(
      Math.min(3 * res[idx1], Math.min(5 * res[idx2])),
      Math.min(7 * res[idx3])
    )
    if (min == 3 * res[idx1]) idx1++
    if (min == 5 * res[idx2]) idx2++
    if (min == 7 * res[idx3]) idx3++
    res[i] = min
  }
  return res[k - 1]
}

console.log(getKthMagicNumber(11))
