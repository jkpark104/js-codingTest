"use strict"

function solution(nums, k) {
  const n = nums.length

  let ans = 0
  let end = 0
  let sum = 0
  for (let start = 0; start < n; start++) {
    while (end < n && (end - start) < k) {
      sum += nums[end]
      end += 1
    }
    ans = Math.max(ans, sum)
    sum -= nums[start]
  }
  return ans
}

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
