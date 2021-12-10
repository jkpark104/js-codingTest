/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

const minOperations = (nums, x) => {
  const n = nums.length;

  const target = nums.reduce((acc, cur) => acc + cur, 0) - x;

  if (target < 0) return -1;

  let end = 0;
  let sum = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let start = 0; start < n; start++) {
    while (end < n && sum < target) {
      sum += nums[end];
      end += 1;
    }

    if (sum === target) ans = Math.min(ans, n - end + start);

    sum -= nums[start];
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

console.log(minOperations([1, 1], 3));
console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
