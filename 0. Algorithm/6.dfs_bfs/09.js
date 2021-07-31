"use strict"

function solution(n, r) {
  function dfs(n, r) {
    if (r === 0) return dp[n][0] = 1
    else if (r === 1) return dp[n][1] = n
    else if (n < 1) return 0
    else {
      if (!dp[n][r]) {
        dp[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r)
      }
      return dp[n][r]
    }
  }
  const dp = new Array(n + 1).fill().map(() => new Array(r + 1).fill(0))
  return dfs(n, Math.min(r, n - r))
}

console.log(solution(5, 3))
console.log(solution(33, 19))