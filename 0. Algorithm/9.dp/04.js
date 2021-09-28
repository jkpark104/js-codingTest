function solution(times, r) {
  times.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  const n = times.length;
  const dp = new Array(n).fill(0);

  const number = times[0][2];
  dp[0] = number;

  let ans = 0;
  for (let i = 1; i < n; i++) {
    let val = 0;
    for (let j = i - 1; j > -1; j--) {
      if (times[i][0] >= times[j][1] + r) {
        val = Math.max(val, dp[j]);
      }
    }
    dp[i] = val + times[i][2];
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

console.log(
  solution(
    [
      [3, 5, 20],
      [4, 7, 16],
      [1, 2, 5],
      [11, 13, 7],
      [9, 10, 6]
    ],
    2
  )
);
