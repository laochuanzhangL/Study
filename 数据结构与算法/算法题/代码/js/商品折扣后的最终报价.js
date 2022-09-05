/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  var getCount = function (i, prices) {
    let temp = prices[i]
    i++
    for (; i < prices.length; i++) {
      if (prices[i] <= temp) return prices[i]
    }
    return 0
  }
  let res = []
  for (let i in prices) {
    res.push(prices[i] - getCount(i, prices))
  }
  return res
}
let prices =[10,1,1,6]
console.log(finalPrices(prices))
