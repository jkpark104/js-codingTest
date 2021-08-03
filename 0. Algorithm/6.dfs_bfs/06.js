"use strict"

// function solution(nums, m) {
//   let ans = 0

//   function dfs(k, selected) {
//     const val = selected.reduce((acc, cur) => {
//       acc[0] += cur[0]
//       acc[1] += cur[1]
//       return acc
//     }, [0, 0])
//     if (val[1] <= m) ans = Math.max(ans, val[0])
//     for (let i = k + 1; i < nums.length; i++) dfs(i, [...selected, nums[i]])
//   }

//   for (let i = 0; i < nums.length; i++) dfs(i, [nums[i]])
//   return ans
// }

console.log(solution([
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4]
], 20))
console.log(solution([
  [15, 6],
  [30, 11],
  [23, 8],
  [14, 4],
  [10, 3],
  [20, 7]
], 25))

function solution(nums, m) {
  function dfs(k, sum) {
    if (sum[1] > m) return
    if (k === n) {
      ans = Math.max(ans, sum[0])
    } else {
      sum = [...sum]
      dfs(k + 1, sum)
      sum[0] += nums[k][0]
      sum[1] += nums[k][1]
      dfs(k + 1, sum)
    }
  }
  const n = nums.length
  let ans = 0
  dfs(0, [0, 0])
  return ans
}