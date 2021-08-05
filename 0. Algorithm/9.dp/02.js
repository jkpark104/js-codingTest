'use strict'

function solution(n) {
  const dp = new Array(10001).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i < n + 2; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  console.log(dp.slice(0, n + 2))
  return dp[n+1]
}

console.log(solution(7))

// Longest Increasing Subsequence