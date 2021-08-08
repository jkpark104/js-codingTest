"use strict"

function solution(nums, m, r) {
  function dfs(k, s, sum) {
    if (k === m) {
      if (sum % r === 0) ans += 1
    } else {
      for (let i = s; i < n; i++) {
        dfs(k + 1, i + 1, sum + nums[i])
      }
    }
  }
  let ans = 0
  const n = nums.length
  dfs(0, 0, 0)

  return ans
}

console.log(solution([2, 4, 5, 8, 12], 3, 6))
console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8))