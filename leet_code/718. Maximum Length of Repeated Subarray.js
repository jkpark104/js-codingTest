/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (nums1, nums2) => {
  const n = nums1.length;
  const m = nums2.length;

  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  let ans = 0;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      ans = Math.max(ans, dp[i][j]);
    }
  }

  return ans;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4]));
