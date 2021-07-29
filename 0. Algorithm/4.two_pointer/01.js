"use strict"

// function solution(nums, k) {
//   let res = []
//   let val = 0
//   let end = 0
//   for (let start = 0; start <= nums.length - k; start++) {
//     while (end < nums.length && end - start < k) {
//       val += nums[end]
//       end += 1
//     }
//     res.push(val)
//     val -= nums[start]
//   }
//   return res.reduce((acc, cur) => Math.max(acc, cur))
// }

const input_data = [
  [
    [12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3
  ],
  [
    [1, 2, 3, 5, 6, 7, 1, 3, 9], 5
  ],
  [
    [12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}

function solution(nums, k) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < k; i++) sum += nums[i]
  let answer = sum
  for (let i = k; i < n - (k - 1); i++) {
    // i < n === i < n-k+1
    sum += (nums[i] - nums[i - k])
    answer = Math.max(answer, sum)
  }
  return answer
}
