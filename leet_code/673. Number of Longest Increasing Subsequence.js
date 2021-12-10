/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = nums => {
  const n = nums.length;
  const dp = new Array(n).fill(0);

  const count = new Array(n + 1).fill(1);
  // dp[0] = 1;

  let maxLen = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        count[dp[i]] = count[dp[j]];
      } else if (nums[i] > nums[j] && dp[j] + 1 === dp[i]) {
        count[dp[i]] += count[dp[j]];
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
    // dp[i] = value + 1;
    // count[dp[i]] += 1;
  }
  console.log(count, maxLen);
  return dp;
};

// console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
// console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
// console.log(findNumberOfLIS([2, 2, 2, 2, 1]));
// console.log(findNumberOfLIS([2, 2, 2, 2, 3]));
// console.log(findNumberOfLIS([1, 5, 2, 3]));
