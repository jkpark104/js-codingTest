'use strict'

// function solution(times, r) {
//   times.sort((a, b) => a[1] - b[1])
//   const n = times.length
//   const dp = new Array(1000001).fill().map(() => new Array(2).fill(0))

//   for (let [start, end, val] of times) {
//     // for (let i = start; i < end + 1 + r; i++) {
//     //   dp[i][0] = Math.max(dp[i][0], val)
//     //   if (dp[i][0] > val) {}
//     //   else 
//     // }
//   }
//   console.log(dp.slice(0, 15))
//   // for (let i = n - 1; i > -1; i--) {
//   // dp[i] = Math.max(dp[i - 1], dp[i] + )
//   // }

// }

console.log(solution([
  [3, 5, 20],
  [4, 7, 16],
  [1, 2, 5],
  [11, 13, 7],
  [9, 10, 6],
], 2))

function solution(times, r) {
  times.sort((a, b) => a[1] - b[1])
  const n = times.length
  const dp = new Array(n).fill(0)

  dp[0] = times[0][2]

  for (let i = 1; i < n; i++) {
    let val = 0
    for (let j = i - 1; j > -1; j--) {
      if (times[j][1] + r <= times[i][0]) {
        val = Math.max(val, dp[j])
      }
    }
    dp[i] = val + times[i][2]
  }
  console.log(dp)
}