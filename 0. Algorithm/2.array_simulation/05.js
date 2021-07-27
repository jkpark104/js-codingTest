"use strict"

// function solution(nums) {
//   const empty = []
//   const seated = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) seated.push(i)
//     else empty.push(i)
//   }

//   let ans = 0
//   for (let e of empty) {
//     let tmp = 1e9
//     for (let s of seated) {
//       tmp = Math.min(Math.abs(e-s), tmp)
//     }
//     ans = Math.max(ans, tmp)
//   }
//   return ans
// }

const input_data = [
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
]

for (let data of input_data) {
  console.log(solution(data))
}

function solution(nums) {
  let n = nums.length

  const dist = new Array(n).fill(0)
  let d = 1000
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      d = 1000
      dist[i] = 1
    } else {
      d += 1
      dist[i] = d
    }
  }
  for (let j = n - 1; j > -1; j--) {
    if (dist[j] === 1) {
      d = 0
      dist[j] = 0
    } else {
      d += 1
      dist[j] = Math.min(dist[j]-1000, d)
    }
  }
  return Math.max(...dist)
}
