"use strict"

// function solution(nums, m) {
//   nums.sort((a, b) => (a - b))

//   let ans = 0
//   while (nums.length > 1) {
//     if (nums[nums.length - 1] + nums[0] <= m) {
//       nums.shift()
//       nums.pop() 
//       ans += 1
//     } else {
//       nums.pop()
//       ans += 1
//     }
//   }
//   return ans + nums.length
// }

console.log(solution([90, 50, 70, 100, 60], 140))
console.log(solution([50, 100], 140))


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