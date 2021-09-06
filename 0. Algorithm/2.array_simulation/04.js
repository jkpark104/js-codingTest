'use strict'

function solution(nums) {
  const n = nums.length

  let i = 0
  while (i < n - 1 && (nums[i] - nums[i + 1] < 0)) i += 1
  if (i === 0 || i === n - 1) return 'NO'
  while (i < n - 1 && (nums[i] - nums[i + 1] > 0)) i += 1
  if (i === n - 1) return 'YES'
  else return 'NO'
}

const input_data = [
  [1, 2, 3, 4, 5, 3, 1],
  [1, 3, 4, 5, 5, 6, 4, 3],
  [1, 2, 3, 4, 5],
]

for (let data of input_data) {
  console.log(solution(data))
}

