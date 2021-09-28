function solution(t, coins) {
  const dp = new Array(t + 1).fill(0);
  dp[0] = 1;
  for (const [cost, num] of coins) {
    for (let i = t; i >= cost; i--) {
      let idx = i;
      for (let j = 0; j < num; j++) {
        if (idx - cost >= 0) dp[i] += dp[idx - cost];
        idx -= cost;
      }
    }
  }
  return dp[t];
}

// 냅색 알고리즘, 유한개
// 백준 2604번

console.log(
  solution(20, [
    [5, 3],
    [10, 2],
    [1, 5]
  ])
);
