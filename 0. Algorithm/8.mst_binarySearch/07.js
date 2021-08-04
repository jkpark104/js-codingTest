'use strict'

function solution(nums, c) {
  function getCount(mid) {
    let cnt = 1
    let prev = nums[0]
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - prev >= mid) {
        cnt += 1
        prev = nums[i]
      }
    }
    return cnt
  }

  function binarySearch(target) {
    nums.sort((a, b) => a - b)
    let start = 1
    let end = nums[nums.length - 1] - nums[0]

    let ans
    while (start <= end) {
      let mid = parseInt((start + end) / 2)
      
      const cnt = getCount(mid)
      if (cnt >= target) {
        ans = mid
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    return ans
  }
  return binarySearch(c)
}

console.log(solution([1, 2, 8, 4, 9], 3))
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8))