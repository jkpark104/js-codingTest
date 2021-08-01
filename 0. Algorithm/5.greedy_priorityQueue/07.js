"use strict"

function solution(nums, m) {
  const dp = new Array(m + 1).fill(Number.MAX_SAFE_INTEGER)

  for (let num of nums) dp[num] = 1

  for (let i = 2; i < m + 1; i++) {
    for (let coin of nums) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i - coin] + 1, dp[i])
    }
  }
  return dp[m]
}

console.log(solution([1, 5, 10], 15))
console.log(solution([1, 5, 12], 15))