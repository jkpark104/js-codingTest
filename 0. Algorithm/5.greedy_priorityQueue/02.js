"use strict"

function solution(nums, m) {
  nums.sort((a, b) => (a - b))

  let ans = 0
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    if (nums[left] + nums[right] <= m) left += 1
    ans += 1
    right -= 1
  }
  return ans
}

console.log(solution([90, 50, 70, 100, 60], 140))
console.log(solution([50, 100], 140))