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
      ans.push([...tmp])
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!chk[i]) {
          chk[i] = 1
          tmp.push(nums[i])
          dfs(k + 1)
          chk[i] = 0
          tmp.pop()
        }
      }
    }
  }
  const chk = new Array(m + 1).fill(0)
  const ans = []
  const tmp = []
  dfs(0)
  return ans
}