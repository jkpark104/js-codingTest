"use strict"

function solution(n) {
  const ans = []
  function dfs(k, selected) {
    ans.push(selected)
    for (let i = selected[k] + 1; i < n + 1; i++) {
      dfs(k + 1, [...selected, i])
    }
  }

  for (let i = 1; i < n + 1; i++) {
    dfs(0, [i])
  }
  return ans
}

console.log(solution(3))