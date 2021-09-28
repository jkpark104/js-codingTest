function solution(nums, m) {
  const dp = new Array(m + 1).fill(0);
  for (const [cost, minute] of nums) {
    for (let i = m; i >= minute; i--) {
      dp[i] = Math.max(dp[i], dp[i - minute] + cost);
    }
  }
  return dp[m];
}

// 문제는 1개 씩만 풀 수 있음 -> 뒤에서 옴

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4]
    ],
    20
  )
);
