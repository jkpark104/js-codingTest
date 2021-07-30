"use strict"

function solution(nums, m) {
  nums = nums.sort((a, b) => a - b)
  for (m; m > 0; m--) {
    nums[nums.length - 1] -= 1
    nums[0] += 1
    nums = nums.sort((a, b) => a - b)
  }
  return nums[nums.length - 1] - nums[0]
}

console.log(solution([2, 1, 3, 7, 5], 2))