const solution = (t, coins) => {
  const dp = new Array(t + 1).fill(0);

  dp[0] = 1;

  for (const [coin, number] of coins) {
    for (let i = t; i >= coin; i--) {
      for (let j = 1; j <= number; j++) {
        if (i - j * coin >= 0) {
          dp[i] += dp[i - j * coin];
        }
      }
    }
  }

  return dp[t];
};

// 냅색 알고리즘, 유한개
// 백준 2604번

console.log(
  solution(20, [
    [5, 3],
    [10, 2],
    [1, 5]
  ])
);
