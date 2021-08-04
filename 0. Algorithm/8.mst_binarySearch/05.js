'use strict'

// function solution(nums, n) {
//   function binarySearch(target) {
//     let start = 1
//     let end = Math.max(...nums)
//     // 제일 큰 걸로 해야 됨

//     while (start <= end) {
//       let mid = parseInt((start + end) / 2)
//       const res = nums.reduce((acc, cur) => {
//         acc += parseInt(cur / mid)
//         return acc
//       }, 0)
//       if (res === target && nums.reduce((acc, cur) => {
//           acc += parseInt(cur / (mid + 1))
//           return acc
//         }, 0) !== target) {
//         return mid
//       } else if (res < target) {
//         end = mid - 1
//       } else {
//         start = mid + 1
//       }
//     }
//   }
//   return binarySearch(n)
// }

console.log(solution([802, 743, 457, 539], 11))

function solution(nums, n) {
  function binarySearch(target) {
    let start = 1
    let end = Math.max(...nums)
    // 제일 큰 걸로 해야 됨
    let ans = undefined
    while (start <= end) {
      let mid = parseInt((start + end) / 2)
      // const res = nums.reduce((acc, cur) => {
      //   acc += parseInt(cur / mid)
      //   return acc
      // }, 0)
      let res = 0
      for (let x of nums) {
        res += Math.floor(x / mid)
      }
      if (res >= target) {
        start = mid + 1
        ans = mid
      } else {
        end = mid - 1
      }
    }
    return ans
  }
  return binarySearch(n)
}