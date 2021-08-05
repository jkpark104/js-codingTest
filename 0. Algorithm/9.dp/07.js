'use strict'

function solution(nums, m) {
  const dp = new Array(21).fill(0)

  for (let [w, c] of nums) {
    for (let i = m; i > 0; i--) {
      if (i - c >= 0) {
        dp[i] = Math.max(dp[i - c] + w, dp[i])
      }
    }
  }

  console.log(dp.slice(0, m + 1))
  return dp[m]
}
// 문제는 1개 씩만 풀 수 있음 -> 뒤에서 옴

console.log(solution([
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
], 20))