"use strict"

const {
  has
} = require("lodash")

// function solution(nums, m) {
//   let answer = 0
//   let sum = 0
//   let nH = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//     if (sum === m) answer += 1
//     if (nH.has(sum - m)) answer += nH.get(sum - m)
//     nH.set(sum, nH.get(sum) + 1 || 1)
//   }
//   return answer
// }
// 1 1개 ans 0
// 3 1개 ans 1
// 6 1개 ans 2
// 3 2개 ans 4
// 4 1개 ans 4
// 6 2개 ans 6

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
}

function solution(nums, m) {
  let sum = 0
  const hash = new Map()

  let ans = 0
  for (let num of nums) {
    sum += num
    if (sum === m) ans += 1
    if (hash.get(sum - m)) ans += hash.get(sum - m)
    hash.set(sum, hash.get(sum) + 1 || 1)
  }
  return ans
}