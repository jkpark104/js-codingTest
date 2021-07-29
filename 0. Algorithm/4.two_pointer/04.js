"use strict"

// function solution(nums, m) {
//   const n = nums.length

//   const nH = {}
//   let sum = 0 // 누적합

//   for (let i = 0; i < n; i++) {
//     sum += nums[i]
//     nH[sum] = nH[sum] + 1 || 1
//   }
//   console.log(nH)
//   // return ans
// }

const input_data = [
  [
    [1, 2, 3, -3, 1, 2], 3
  ],
  [
    [-1, 0, 1], 0
  ],
  [
    [-1, -1, -1, 1], 0
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1], data[0].length))
  break
}

function solution(nums, m) {
  let answer = 0
  let sum = 0
  let nH = new Map()
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum === m) answer += 1
    if (nH.has(sum - m)) answer += nH.get(sum - m)
    nH.set(sum, nH.get(sum) + 1 || 1)
  }
  return answer
}
// 1 1개 ans 0
// 3 1개 ans 1
// 6 1개 ans 2
// 3 2개 ans 4
// 4 1개 ans 4
// 6 2개 ans 6