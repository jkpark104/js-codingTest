'use strict'

function solution(nums, m) {
  const dp = new Array(1001).fill(0)

  for (let [w, c] of nums) {
    dp[w] = c
  }
  for (let i = 1; i < m + 1; i++) {
    for (let [w, c] of nums) {
      if (i - w >= 0) {
        dp[i] = Math.max(dp[i - w] + c, dp[i])
      }
    }
  }
  console.log(dp.slice(0, m + 1))
  return dp[m]
}

console.log(solution([
  [5, 12],
  [3, 8],
  [6, 14],
  [4, 7],
], 11))

function solution(nums, m) {
  const dp = new Array(1001).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j < m + 1; j++) {
      dp[j] = Math.max(dp[j], dp[j - nums[i][0]] + nums[i][1])
    }
  }
  console.log(dp.slice(0, m + 1))
  return dp[m]
}