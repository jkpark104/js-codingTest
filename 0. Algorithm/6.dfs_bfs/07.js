"use strict"

// function solution(n, m) {
//   function dfs(k, selected) {
//     if (k === m - 1) {
//       ans.push(selected)
//       return
//     }
//     for (let i = 1; i < n + 1; i++) {
//       dfs(k + 1, [...selected, i])
//     } 
//   }

//   const ans = []
//   for (let i = 1; i < n + 1; i++) {
//     dfs(0, [i])
//   }
//   return ans
// }

console.log(solution(3, 2))

function solution(n, m) {
  function dfs(k) {
    if (k === m) {
      ans.push(selected.slice())
    } else {
      for (let i = 1; i < n + 1; i++) {
        selected.push(i)
        dfs(k + 1)
        selected.pop()
      }
    }
  }
  let ans = []
  let selected = []
  dfs(0)
  return ans
}

