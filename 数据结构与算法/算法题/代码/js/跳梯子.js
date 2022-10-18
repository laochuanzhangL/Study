/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) return 1
  let dp = new Array(n + 2)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  console.log(dp)
  return dp[n] % 1000000007
}
