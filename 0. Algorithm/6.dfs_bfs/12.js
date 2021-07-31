"use strict"

function solution(nums, m, k) {
  function dfs(r, selected) {
    if (selected.length === m) {
      if (selected.reduce((acc, cur) => acc + cur) % k === 0) ans += 1
      return
    }
    for (let i = r + 1; i < nums.length; i++) {
      dfs(i, [...selected, nums[i]])
    }
  }
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    dfs(i, [nums[i]])
  }

  return ans
}

console.log(solution([2, 4, 5, 8, 12], 3, 6))
console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8))