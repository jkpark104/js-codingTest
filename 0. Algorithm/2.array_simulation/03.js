// function solution(nums) {
//   let ans = 0

//   let i = 0
//   while (i < nums.length - 1) {
//     let prev = nums[i]
//     let end = i + 1
//     while (end < nums.length && prev < nums[end]) {
//       prev = nums[end]
//       end += 1
//     }
//     ans = Math.max(ans, end - i)
//     i += 1
//   }

//   i = 0
//   while (i < nums.length - 1) {
//     let prev = nums[i]
//     let end = i + 1
//     while (end < nums.length && prev > nums[end]) {
//       prev = nums[end]
//       end += 1
//     }
//     ans = Math.max(ans, end - i)
//     i += 1
//   }

//   return ans
// }

const input_data = [
  [5, 3, 6, 7, 9, 8, 5, 3, 1, 2],
  [5, 2, 4, 7, 6, 3, 9, 10, 11],
  [1, 2, 3, 3, 4, 5, 6, 7, 7],
]

for (let data of input_data) {
  console.log(solution(data))
}

function solution(nums) {
  let ans = 0
  let height = [1 , 1]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      height[0] += 1
    } else {
      ans = Math.max(ans, height[0])
      height[0] = 1
    }
    
    if (nums[i - 1] > nums[i]) {
      height[1] += 1
    } else {
      ans = Math.max(ans, height[1])
      height[1] = 1
    }
  }
  ans = Math.max(ans, ...height)
  return ans
}