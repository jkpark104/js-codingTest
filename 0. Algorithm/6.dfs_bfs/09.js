"use strict"

function solution(n, r) {
  function dfs(n, r) {
    if (dp[n][r]) return dp[n][r]
    if (n === r || r === 0) return 1
    else {
      return dp[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r)
    }
  }
  const dp = new Array(n + 1).fill().map(() => new Array(r + 1).fill(0))
  return dfs(n, Math.min(r, n - r))
}

console.log(solution(5, 3))
console.log(solution(33, 19))