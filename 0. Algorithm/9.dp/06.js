'use strict'

// function solution(nums, m) {
//   const dp = new Array(501).fill(1e9)

//   for (let num of nums) {
//     dp[num] = 1
//   }
//   dp[0] = 0
//   for (let i = 1; i < m + 1; i++) {
//     for (let num of nums) {
//       if (i - num >= 0) {
//         dp[i] = Math.min(dp[i - num] + 1, dp[i])
//       }
//     }
//   }
//   console.log(dp.slice(0, m + 1))
//   return dp[m]
// }

console.log(solution([1, 2, 5], 15))

function solution(nums, m) {
  const dp = new Array(501).fill(1e9)

  dp[0] = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i]; j < m + 1; j++) {
      dp[j] = Math.min(dp[j], dp[j-nums[i]] + 1)
    }
  }
  return dp[m]
}