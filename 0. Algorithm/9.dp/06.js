'use strict'

// function solution(nums, m) {
//   const dp = new Array(501).fill(1e9)

//   dp[0] = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = nums[i]; j < m + 1; j++) {
//       dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1)
//     }
//   }
//   return dp[m]
// }

console.log(solution([1, 2, 5], 15))

function solution(nums, m) {
  const dp = new Array(m + 1).fill(1e9)
  dp[0] = 0
  for (let coin of nums) {
    for (let i = coin; i < m + 1; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  console.log(dp)
  return dp[m]
}