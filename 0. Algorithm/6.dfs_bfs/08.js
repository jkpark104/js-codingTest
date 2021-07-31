"use strict"

function solution(nums, m) {
  function dfs(k, selected) {
    if (k === m - 1) {
      ans.push(selected)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!selected.includes(nums[i])) {
        dfs(k + 1, [...selected, nums[i]])
      }
    }
  }

  const ans = []
  for (let i = 0; i < nums.length; i++) dfs(0, [nums[i]])
  return ans
}

console.log(solution([3, 6, 9], 2))