'use strict'

// function solution(nums) {
//   const n = nums.length
//   const dp = new Array(n).fill(0)

//   dp[0] = 1
//   if (nums[0] < nums[1]) dp[1] = 2
//   else dp[1] = 0

//   for (let i = 2; i < n; i++) {
//     const a = nums[i - 1]
//     const b = nums[i - 2]
//     if (nums[i] > a && nums[i] > b) {
//       dp[i] = Math.max(dp[i - 1], dp[i - 2]) + 1
//     } else if (nums[i] > a) {
//       dp[i] = dp[i - 1] + 1
//     } else if (nums[i] > b) {
//       dp[i] = dp[i - 2] + 1
//     } else {
//       dp[i] = Math.max(dp[i - 1], dp[i - 2])
//       if (dp[i - 1] > dp[i - 2]) nums[i] = nums[i - 1]
//       else nums[i] = nums[i - 2]
//     }
//   }
//   return dp[n-1]
// }
// 틀림

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]))
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]))
console.log(solution([1, 9, 8, 2, 3, 4, 5, 6, 7]))
// 2 5 6 7 12

function solution(nums) {
  function dfs(idx) {
    if (idx === -1) return
    dfs(parent[idx])
    stack.push(nums[idx])
  }

  const n = nums.length
  const dp = new Array(n).fill(0)
  const parent = new Array(n).fill(-1)
  dp[0] = 1
  parent[0] = -1
  if (nums[0] < nums[1]) {
    dp[1] = 2
    parent[1] = 1
  } else {
    dp[1] = 1
    parent[1] = -1
  }
  
  let ans = Math.max(dp[0], dp[1])
  let idx = 0
  for (let i = 2; i < n; i++) {
    let val = 0
    for (let j = i - 1; j > -1; j--) {
      if (nums[i] > nums[j] && dp[j] > val) {
        val = dp[j]
        parent[i] =  j
      } 
    }
    dp[i] = val + 1
    if (ans < dp[i]) {
      ans = dp[i]
      idx = i
    }
  }
  const stack = []
  dfs(idx)
  console.log(stack)
  return ans
}