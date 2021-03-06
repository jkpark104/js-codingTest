/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = (nums, k) => {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let ans = 0;
  let start = 0;
  let sum = 0;
  for (let end = 0; end < n; end++) {
    sum += nums[end];

    while (start < n && sum + k < nums[end] * (end - start + 1)) {
      sum -= nums[start];

      start += 1;
    }

    ans = Math.max(ans, end - start + 1);
  }

  return ans;
};

console.log(maxFrequency([1, 2, 4], 5));
console.log(maxFrequency([1, 4, 8, 13], 5));
console.log(maxFrequency([3, 9, 6], 2));
console.log(
  maxFrequency(
    [
      9940, 9995, 9944, 9937, 9941, 9952, 9907, 9952, 9987, 9964, 9940, 9914,
      9941, 9933, 9912, 9934, 9980, 9907, 9980, 9944, 9910, 9997
    ],
    7925
  )
);
