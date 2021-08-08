'use strict'

function solution(s1, s2) {
  function dfs(n, m) {
    if (n === 0 || m === 0) return
    if (s1[n - 1] === s2[m - 1]) {
      dfs(n - 1, m - 1)
      subString.push(s1[n - 1])
    } else {
      if (dp[n - 1][m] > dp[n][m - 1]) dfs(n - 1, m)
      else dfs(n, m - 1)
    }
  }

  s1 = s1.split('')
  s2 = s2.split('')
  const n = s1.length
  const m = s2.length

  const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0))

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  const subString = []
  dfs(n, m)
  console.log(subString)
  return dp[n][m]
}

console.log(solution('acbehf', 'abefc'))

// Longest Common Subsequecne