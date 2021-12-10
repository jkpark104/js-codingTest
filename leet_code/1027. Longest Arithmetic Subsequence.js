// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let longestArithSeqLength = function (nums) {
//   const n = nums.length;
//   const dx = Math.max(...nums) - Math.min(...nums);

//   const dp = new Array(n).fill().map(() => new Array(dx + 1).fill(1));
//   const dpRight = new Array(n).fill().map(() => new Array(dx + 1).fill(1));

//   let ans = 1;
//   for (let i = 1; i < n; i++) {
//     for (let j = i - 1; j > -1; j--) {
//       if (nums[i] - nums[j] >= 0) {
//         dp[i][nums[i] - nums[j]] = Math.max(
//           dp[i][nums[i] - nums[j]],
//           dp[j][nums[i] - nums[j]] + 1
//         );
//         ans = Math.max(ans, dp[i][nums[i] - nums[j]]);
//       }
//     }
//   }

//   for (let i = n - 2; i > -1; i--) {
//     for (let j = i + 1; j < n; j++) {
//       if (nums[i] - nums[j] >= 0) {
//         dpRight[i][nums[i] - nums[j]] = Math.max(
//           dpRight[i][nums[i] - nums[j]],
//           dpRight[j][nums[i] - nums[j]] + 1
//         );
//         ans = Math.max(ans, dpRight[i][nums[i] - nums[j]]);
//       }
//     }
//   }
//   return ans;
// };

const longestArithSeqLength = nums => {
  const n = nums.length;

  const dp = new Array(n).fill().map(() => new Map());

  let ans = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      dp[i].set(diff, (dp[j].get(diff) || 0) + 1);
      ans = Math.max(ans, dp[i].get(diff) + 1);
    }
  }

  return ans;
};

console.log(longestArithSeqLength([3, 6, 9, 12]));
