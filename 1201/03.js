function solution(times) {
  const n = 72;
  const dp = new Array(n + 1).fill(0);

  for (const [a, b] of times) {
    dp[a] += 1;
    dp[b] -= 1;
  }

  let ans = 0;

  console.log(dp);

  for (let i = 1; i < n + 1; i++) {
    dp[i] += dp[i - 1];
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
  ])
);
