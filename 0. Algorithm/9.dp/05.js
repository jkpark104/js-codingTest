function solution(nums, m) {
  const dp = new Array(m + 1).fill(0);
  for (const [num, cost] of nums) {
    for (let i = num; i < m + 1; i++) {
      dp[i] = Math.max(dp[i], dp[i - num] + cost);
    }
  }
  return dp[m];
}

console.log(
  solution(
    [
      [5, 12],
      [3, 8],
      [6, 14],
      [4, 7]
    ],
    11
  )
);
