"use strict"

// function solution(nums, m) {
//   function dfs(k, selected) {
//     if (k === m - 1) {
//       ans.push(selected)
//       return
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (!selected.includes(nums[i])) {
//         dfs(k + 1, [...selected, nums[i]])
//       }
//     }
//   }

//   const ans = []
//   for (let i = 0; i < nums.length; i++) dfs(0, [nums[i]])
//   return ans
// }

console.log(solution([3, 6, 9], 2))

function solution(nums, m) {
  function dfs(k) {
    if (k === m) {
      ans.push(selected.slice())
    } else {
      for (let i = 0; i < n; i++) {
        if (!chk[i]) {
          selected.push(nums[i])
          chk[i] = 1
          dfs(k + 1)
          selected.pop()
          chk[i] = 0
        }
      }
    }
  }
  const n = nums.length
  const ans = []
  const selected = []
  const chk = new Array(n).fill(0)
  dfs(0)
  return ans
}