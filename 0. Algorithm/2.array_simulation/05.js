"use strict"

// function solution(nums) {
//   let n = nums.length

//   const dist = new Array(n).fill(0)
//   let d = 1000
//   for (let i = 0; i < n; i++) {
//     if (nums[i] === 1) {
//       d = 1000
//       dist[i] = 1
//     } else {
//       d += 1
//       dist[i] = d
//     }
//   }
//   for (let j = n - 1; j > -1; j--) {
//     if (dist[j] === 1) {
//       d = 0
//       dist[j] = 0
//     } else {
//       d += 1
//       dist[j] = Math.min(dist[j]-1000, d)
//     }
//   }
//   return Math.max(...dist)
// }

const input_data = [
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
]

for (let data of input_data) {
  console.log(solution(data))
}

function solution(nums) {
  const n = nums.length

  const dist = new Array(n).fill(0)

  let d = 0
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (!nums[i]) {
      d += 1
      dist[i] = d
    } else {
      d = 0
    }
  }
  d = 0
  for (let i = n - 1; i > -1; i--) {
    if(!nums[i]) {
      d += 1
      dist[i] = Math.min(dist[i], d)
      ans = Math.max(dist[i], ans)
    } else {
      d = 0
    }
  }
  return ans
}