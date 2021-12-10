// function solution(n) {
//   const dp = new Array(n + 1).fill(0);
//   dp[0] = 1;
//   dp[1] = 2;

//   for (let i = 2; i < n + 1; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }
const solution = n => {
  const dp = new Array(n + 1).fill(0);
};

console.log(solution(7));

// Longest Increasing Subsequence
