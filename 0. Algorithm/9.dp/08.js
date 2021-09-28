function solution(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const subString = [];
  const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

  function dfs(x, y) {
    if (x === 0 || y === 0) return;
    if (s1[x - 1] === s2[y - 1]) {
      dfs(x - 1, y - 1);
      subString.push(s1[x - 1]);
    } else if (dp[x - 1][y] > dp[x][y - 1]) dfs(x - 1, y);
    else dfs(x, y - 1);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  dfs(n, m);
  console.log(subString.join(''));
  return dp[n][m];
}

// Longest Common Subsequecne

console.log(solution('acbehf', 'abefc'));
