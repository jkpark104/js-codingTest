/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      } else break;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 1]));
