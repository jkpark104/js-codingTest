const solution = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;

  const dp = new Array(n + 1)
    .fill()
    .map(() => new Array(m + 1).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < n + 1; i++) dp[i][0] = i;
  for (let i = 0; i < m + 1; i++) dp[0][i] = i;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      s1[i - 1] === s2[j - 1]
        ? (dp[i][j] = dp[i - 1][j - 1])
        : (dp[i][j] =
            Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1);
    }
  }

  return dp[n][m];
};

console.log(solution('BAOBAB', 'BACBA'));
console.log(solution('AABAB', 'BABB'));

// 대각선 편집
// 위쪽 삭제
// 왼쪽 추가
