"use strict"

// function solution(nums, k) {
//   const n = nums.length
//   const q = []
//   const ans = []
//   let i = 0
//   while (i < n) {
//     if (q.length !== k) {
//       q.push(nums[i])
//     } else {
//       ans.push(Math.min(...q))
//       q.push(nums[i])
//       q.shift()
//     }
//     i += 1
//   }
//   ans.push(Math.min(...q))
//   return ans
// }

// -> O(n^2)임 -> wrong

const input_data = [
  [
    [11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}

function solution(nums, k) {
  const answer = []
  const deque = []

  for (let i = 0; i < k - 1; i++) {
    while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
      deque.pop()
    }
    deque.push([nums[i], i])
  }
  for (let i = k - 1; i < nums.length; i++) {
    while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
      deque.pop()
    }
    deque.push([nums[i], i])
    answer.push(deque[0][0])
    if (deque[0][1] === i - k + 1) deque.shift()
  }
  return answer
}