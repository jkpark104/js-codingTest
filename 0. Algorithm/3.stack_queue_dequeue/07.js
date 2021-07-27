"use strict"

function solution(nums, k) {
  const n = nums.length
  const q = []
  const ans = []
  let i = 0
  while (i < n) {
    if (q.length !== 3) {
      q.push(nums[i])
    } else {
      ans.push(Math.min(...q))
      q.push(nums[i])
      q.shift()
    }
    i += 1
  }
  ans.push(Math.min(...q))
  return ans
}

const input_data = [
  [
    [11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}