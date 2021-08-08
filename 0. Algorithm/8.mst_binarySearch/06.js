'use strict'

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
    let start = 1
    let end = nums.reduce((acc, cur) => acc + cur)

    while (start <= end) {
      let mid = parseInt((start + end) / 2)

      if (getCount(mid) <= target) {
        end = mid - 1
        ans = mid
      } else {
        start = mid + 1
      }
    }
  }
  let ans = undefined
  binarySearch(m)
  return ans
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3))

