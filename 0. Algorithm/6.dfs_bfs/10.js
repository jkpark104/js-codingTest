"use strict"

function solution(n, f) {
  function com(n, r) {
    if (r === 0) return dp[n][0] = 1
    else if (r === 1) return dp[n][1] = n
    else if (n < 1) return 0
    else {
      if (!dp[n][r]) dp[n][r] = com(n - 1, r - 1) + com(n - 1, r)
      return dp[n][r]
    }
  }

  function dfs(k, selected) {
    if (ans.length) return
    if (k === n - 1) {
      let val = 0
      for (let i = 0; i < n; i++) {
        val += selected[i] * biCoefficient[n][i]
      }
      if (val === f) ans.push(selected)
    } else {
      for (let i = 1; i < n+1; i++) {
        if (!selected.includes(i)) dfs(k + 1, [...selected, i])
      }
    }
  }
  const dp = new Array(n).fill().map(() => new Array(n).fill(0))
  const biCoefficient = new Array(n + 1).fill().map(() => new Array())

  for (let j = 1; j < n + 1; j++) {
    for (let i = 0; i < j; i++) {
      biCoefficient[j].push(com(j - 1, i))
    }
  }

  const ans = []
  for (let i = 1; i < n + 1; i++) {
    dfs(0, [i])
  }
  ans.sort()
  return ans[0]
}

console.log(solution(4, 16))
console.log(solution(5, 50))