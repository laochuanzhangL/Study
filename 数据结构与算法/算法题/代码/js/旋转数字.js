var rotatedDigits = function (n) {
  let res = 0,
    reg1 = /[347]/g,
    reg2 = /[2569]/g
  for (let i = 2; i <= n; i++) {
    s = i + ""
    if (s.search(reg1) == -1) {
      if (s.search(reg2) >= 0) {
        res++
      }
    }
  }
  return res
}
console.log(rotatedDigits(10))
