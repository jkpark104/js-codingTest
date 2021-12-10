const solution = (nums, m) => {
  const dp = new Array(m + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;
  for (const coin of nums) {
    for (let i = coin; i < m + 1; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[m];
};

console.log(solution([1, 5, 10], 15));
console.log(solution([1, 5, 12], 15));
