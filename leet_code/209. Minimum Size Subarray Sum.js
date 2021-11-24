/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  const n = nums.length;

  let ans = 1e5;

  let sum = 0;
  let end = 0;

  for (let start = 0; start < n; start++) {
    while (end < n && sum < target) {
      sum += nums[end];
      end += 1;
    }

    if (sum >= target) ans = Math.min(ans, end - start);

    sum -= nums[start];
  }

  return ans === 1e5 ? 0 : ans;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
