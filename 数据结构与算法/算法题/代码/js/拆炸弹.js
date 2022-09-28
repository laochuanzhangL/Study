var decrypt = function (code, k) {
  let len = code.length,
    res = new Array(len).fill(0)
  if (k == 0) return res
  else {
    let l = 0,
      r = 0
    let temp = 0
    if (k > 0) {
      while (r < k) {
        temp += code[++r]
      }
    } else {
      while (l > k) {
        temp += code.getVal(--l)
      }
      l--
      r--
    }
    res[0] = temp
    for (let i = 1; i < len; i++) {
      temp -= code.getVal(++l)
      temp += code.getVal(++r)
      res[i] = temp
    }
    return res
  }
}
Array.prototype.getVal = function (idx) {
  let len = this.length
  return this[(len + idx) % len]
}
let code = [2,4,9,3], k = -2

console.log(decrypt(code, k))
