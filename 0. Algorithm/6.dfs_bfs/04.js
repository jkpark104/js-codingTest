"use strict"

// function solution(nums) {
//   let ans = 'NO'
//   function dfs(k, selected) {
//     const selectedSum = selected.reduce((acc, cur) => acc + cur)
//     if (selectedSum === nums.reduce((acc, cur) => acc + cur) - selectedSum) ans = 'YES'
//     for (let i = k + 1; i < nums.length; i++) dfs(i, [...selected, nums[i]])
//   }

//   for (let i = 0; i < nums.length; i++) dfs(i, [nums[i]])
//   return ans
// }

console.log(solution([1, 3, 5, 6, 7, 10]))
console.log(solution([5, 2, 6, 9, 10, 12]))
console.log(solution([3, 9, 11, 13]))

function solution(nums) {
  function dfs(L, sum) {
    if (flag) return
    if (L === n) {
      if (total - sum === sum) {
        ans = 'YES'
        flag = true
      }
    } else {
      dfs(L + 1, sum + nums[L])
      dfs(L + 1, sum)
    }
  }

  const n = nums.length
  let ans = 'NO'
  let flag = false
  let total = nums.reduce((a, b) => a + b, 0)
  dfs(0, 0)
  return ans
}