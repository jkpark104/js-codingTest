function solution(nums, m) {
  const dp = new Array(m + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;
  for (const num of nums) {
    for (let i = num; i < m + 1; i++) {
      dp[i] = Math.min(dp[i], dp[i - num] + 1);
    }
  }

  console.log(dp);
  return dp[m];
}
console.log(solution([1, 2, 5], 15));
