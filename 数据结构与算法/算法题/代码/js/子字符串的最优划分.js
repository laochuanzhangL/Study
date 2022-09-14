var partitionString = function (s) {
  let res = 0,
    set = new Set()
  for (let i of s) {
    if (set.has(i)) {
      res++
      set.clear()
    } set.add(i)
  }
  return res + 1
}
console.log(partitionString("abacaba"))
