/**
 * @param {string}
 * @return {number}
 */
const longestPalindromeSubseq = s => {
  const n = s.length;

  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 1; i < n + 1; i++) dp[i][i] = 1;

  for (let i = 1; i < n; i++) {
    if (s[i - 1] === s[i]) dp[i][i + 1] = 2;
    else dp[i][i + 1] = 1;
  }

  for (let d = 2; d < n; d++) {
    for (let i = 1; i < n - d + 1; i++) {
      s[i - 1] === s[i + d - 1]
        ? (dp[i][i + d] = dp[i + 1][i + d - 1] + 2)
        : (dp[i][i + d] = Math.max(dp[i + 1][i + d], dp[i][i + d - 1]));
    }
  }
  return dp[1][n];
};

console.log(longestPalindromeSubseq('bbaccb'));
console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('cbbd'));
