/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  let len = croakOfFrogs.length,
    obj = {},
    result = 0
  ;(obj.c = 0), (obj.r = 0), (obj.o = 0), (obj.a = 0), (obj.k = 0)
  for (let i = 0; i < len; i++) {
    obj[croakOfFrogs[i]]++
    result = Math.max(obj.c - obj.k, result)
    if (!(obj.c >= obj.r && obj.r >= obj.o && obj.o >= obj.a && obj.a >= obj.k))
      return -1
  }
  if (!(obj.c == obj.r && obj.c == obj.o && obj.c == obj.a && obj.c == obj.k))
    return -1
  return result
}
let str = "crcoakroak"
console.log(minNumberOfFrogs(str))
