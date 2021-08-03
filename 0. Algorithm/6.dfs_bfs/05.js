"use strict"

// function solution(nums, c) {
//   let ans = 0

//   function dfs(k, selected) {
//     const val = selected.reduce((acc, cur) => acc + cur)
//     if (val <= c) ans = Math.max(ans, val)
//     for (let i = k + 1; i < nums.length; i++) dfs(i, [...selected, nums[i]])
//   }

//   for (let i = 0; i < nums.length; i++) dfs(i, [nums[i]])
//   return ans
// }

console.log(solution([81, 58, 42, 33, 61], 259))
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379))


function solution(nums, c) {
  function dfs(k, sum, tsum) {
    if (sum > c) return
    if (sum + (total - tsum) < ans) return
    if (k === n) {
      if (sum <= c) ans = Math.max(ans, sum)
    } else {
      dfs(k + 1, sum + nums[k], tsum + nums[k])
      dfs(k + 1, sum, tsum + nums[k])
    }
  }
  const n = nums.length
  const total = nums.reduce((a, b) => a + b)
  let ans = 0
  dfs(0, 0, 0)
  return ans
}