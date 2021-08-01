"use strict"

function solution(nums, k) {
  const ans = []
  const stack = []

  for (let i = 0; i < k - 1; i++) {
    while (stack.length && stack[stack.length - 1][0] > nums[i]) stack.pop()
    stack.push([nums[i], i])
  }

  for (let i = k - 1; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1][0] > nums[i]) stack.pop()
    stack.push([nums[i], i])
    ans.push(stack[0][0])
    if (i - stack[0][1] === k - 1) stack.shift()
  }
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

