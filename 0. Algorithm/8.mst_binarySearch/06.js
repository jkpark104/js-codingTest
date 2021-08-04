'use strict'

// function solution(nums, m) {
//   function binarySearch(target) {
//     let start = Math.max(...nums)
//     let end = nums.reduce((acc, cur) => acc + cur)

//     while (start <= end) {
//       let mid = parseInt((start + end) / 2)

//       let cnt = [0, 0]
//       let val = [0, 0]
//       for (let num of nums) {
//         if (val[0] + num > mid) {
//           cnt[0] += 1
//           val[0] = num
//         } else {
//           val[0] += num
//         }
//         if (val[1] + num > (mid - 1)) {
//           cnt[1] += 1
//           val[1] = num
//         } else {
//           val[1] += num
//         }
//       }
//       if (val[0]) cnt[0] += 1
//       if (val[1]) cnt[1] += 1

//       if (cnt[0] === target && cnt[0] !== cnt[1]) {
//         return mid
//       } else if (cnt[0] > target) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//   }
//   return binarySearch(m)
// }

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3))

function solution(nums, m) {
  function getCount(mid) {
    let cnt = 0
    let val = 0
    for (let num of nums) {
      if (val + num > mid) {
        cnt += 1
        val = num
      } else {
        val += num
      }
    }
    if (val) cnt += 1
    return cnt
  }

  function binarySearch(target) {
    let start = Math.max(...nums)
    let end = nums.reduce((acc, cur) => acc + cur)
    let ans = undefined
    while (start <= end) {
      let mid = parseInt((start + end) / 2)
      const cnt = getCount(mid)

      if (cnt <= target) {
        ans = mid
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    return ans
  }
  return binarySearch(m)
}