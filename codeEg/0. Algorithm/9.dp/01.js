const solution = n => {
  const dp = new Array(n + 1).fill(0);
  [dp[0], dp[1]] = [1, 1];

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(solution(7));
