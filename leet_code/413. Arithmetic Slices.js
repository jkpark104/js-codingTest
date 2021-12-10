/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = nums => {
  const d_nums = [];

  for (let i = 0; i < nums.length - 1; i++) {
    d_nums.push(nums[i] - nums[i + 1]);
  }

  let ans = 0;
  const n = d_nums.length;

  if (n < 2) return 0;

  for (let d = -1000; d <= 1000; d++) {
    let end = 0;
    for (let start = 0; start < n; start++) {
      while (end < n && d_nums[end] - d_nums[start] === d) {
        end += 1;
      }

      if (end - start >= 2) ans += end - start - 1;
    }
  }

  return ans;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1]));
