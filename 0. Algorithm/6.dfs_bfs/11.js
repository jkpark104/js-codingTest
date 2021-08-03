// "use strict"

// function solution(n, r) {
//   function dfs(k, selected) {
//     if (k == r - 1) {
//       ans.push(selected)
//       return
//     }
//     for (let i = selected[selected.length - 1] + 1; i < n + 1; i++) {
//       dfs(k+1, [...selected, i])
//     }
//   }
//   const ans = []

//   for (let i = 1; i < n + 1; i++) {
//     dfs(0, [i])
//   }

//   return ans
// }

console.log(solution(4, 2))

function solution(n, m) {
  function dfs(k, s) {
    if (k === m) {
      ans.push([...tmp])
    } else {
      for (let i = s; i < n + 1; i++) {
        tmp.push(i)
        dfs(k+1, i+1)
        tmp.pop()
      }
    }
  }
  const ans = []
  const tmp = []

  dfs(0, 1)

  return ans
}