'use strict'

// function solution(n) {
//   const dp = new Array(10001).fill(0)
//   dp[1] = 1
//   dp[2] = 2
//   for (let i = 3; i < n + 1; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   console.log(dp.slice(0, n + 1))
//   return dp[n]
// }

console.log(solution(7))

function solution(n) {
  const dy = new Array(10001).fill(0)
  dy[1] = 1
  dy[2] = 2
  for (let i = 3; i < n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2]
  }
  console.log(dy.slice(0, n + 1))
  return dy[n]
}