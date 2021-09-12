// function solution(nums, m) {
//   nums = nums.sort((a, b) => a - b)

//   let start = 0
//   let end = nums.length - 1
//   for (m; m > 0; m--) {
//     while (0 < end && nums[end - 1] > nums[end]) end -= 1
//     while (start < nums.length - 1 && nums[start] > nums[start + 1]) start += 1
//     if (end === 0 && start === nums.length - 1) return 0
//     nums[end] -= 1
//     nums[start] += 1
//   }
//   console.log(nums, start, end)
//   return nums[end] - nums[start]
// }

function solution(nums, m) {
  
}

console.log(solution([1, 2, 3, 4, 5, 6], 8))
console.log(solution([2, 1, 3, 7, 5], 2))
console.log(solution([2, 2, 2, 2], 2))