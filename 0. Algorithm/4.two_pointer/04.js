"use strict"

function solution(nums, m) {
  const hash = new Map()

  let sum = 0
  let ans = 0
  for (let num of nums) {
    sum += num
    if (sum === m) ans += 1
    if (hash.has(sum - m)) {
      ans += hash.get(sum - m)
    }
    hash.set(sum, hash.get(sum) + 1 || 1)
  }
  return ans
}

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