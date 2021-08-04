'use strict'

function solution(nums, m) {
  function binarySearch(target) {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
      let mid = parseInt((start + end) / 2)
      if (nums[mid] === target) {
        return mid + 1
      } else if (nums[mid] > target) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }
  nums.sort((a, b) => a - b)
  return binarySearch(m)
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32))