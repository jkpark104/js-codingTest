const solution = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;

  const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      s1[i - 1] === s2[j - 1]
        ? (dp[i][j] = dp[i - 1][j - 1] + 1)
        : (dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]));
    }
  }

  const stack = [];
  const dfs = (x, y) => {
    if (x === 0 || y === 0) return;

    if (s1[x - 1] === s2[y - 1]) {
      dfs(x - 1, y - 1);
      stack.push(s1[x - 1]);
      return;
    }

    dp[x - 1][y] > dp[x][y - 1] ? dfs(x - 1, y) : dfs(x, y - 1);
  };

  dfs(n, m);

  console.log(stack);

  return dp[n][m];
};

// Longest Common Subsequecne

console.log(solution('acbehf', 'abefc'));
