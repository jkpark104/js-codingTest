"use strict"

// function solution(nums, m) {
//   let ans = 0

//   let end = 0
//   let val = 0
//   for (let start = 0; start < nums.length; start++) {
//     while (end < nums.length && val < m) {
//       val += nums[end]
//       end += 1
//     }
//     if (val === m) ans += 1 //구간 합계가 m일 때 ans += 1
//     val -= nums[start]
//   }
//   return ans
// }
const input_data = [
  [
    [1, 2, 1, 3, 1, 1, 1, 2], 6
  ],
  [
    [1, 1, 1, 1, 1, 1], 3
  ],
  [
    [1, 2, 1, 2, 1, 2, 1], 3
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}
