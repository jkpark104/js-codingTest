"use strict"

function solution(nums, m) {
  const dp = new Array(10001).fill(Number.MIN_SAFE_INTEGER)
  for (let i of nums) dp[i] = 1

  for (let i = 2; i < m + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i], dp[i])
  }
}

console.log(solution([1, 5, 10], 15))
console.log(solution([1, 5, 12], 15))