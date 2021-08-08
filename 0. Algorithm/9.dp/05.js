'use strict'

function solution(nums, m) {
  const dp = new Array(m + 1).fill(0)

  for (let [w, c] of nums) {
    for (let i = w; i < m + 1; i++) {
      if (i - w >= 0) dp[i] = Math.max(dp[i], dp[i - w] + c)
    }
  }
  return dp[m]
}

console.log(solution([
  [5, 12],
  [3, 8],
  [6, 14],
  [4, 7],
], 11))

