"use strict"

function solution(nums) {
  const n = nums.length
  const dist = new Array(n).fill(0)
  let d = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      d += 1
      dist[i] = d
    } else {
      d = 0
    }
  }

  d = 0
  let ans = 0
  for (let i = n - 1; i > -1; i--) {
    if (nums[i] === 0) {
      d += 1
      dist[i] = Math.min(dist[i], d)
      ans = Math.max(ans, dist[i])
    } else {
      d = 0
    }
  }
  return ans
}

const input_data = [
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
]

for (let data of input_data) {
  console.log(solution(data))
}