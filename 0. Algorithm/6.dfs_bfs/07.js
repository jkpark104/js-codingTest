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
      ans.push([...tmp])
    } else {
      for (let i = 1; i < n + 1; i++) {
        // if (!chk[i]) {
          tmp.push(i)
          chk[i] = 1
          dfs(k + 1)
          tmp.pop()
          // chk[i] = 0
        // }
      }
    }
  }
  const chk = new Array(n + 1).fill(0)
  const ans = []
  const tmp = []
  dfs(0)
  return ans
}