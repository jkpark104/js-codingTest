/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  const n = nums.length;

  let end = 0;
  for (let start = 0; start < n; start++) {
    if (start > end) end = start;
    while (end < n && nums[end] === 0) end += 1;

    if (start < end && nums[start] === 0 && nums[end]) {
      nums[start] = nums[end];
      nums[end] = 0;
    }
  }
  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0]));
// console.log(moveZeroes([1, 0]));
console.log(moveZeroes([1, 0, 1]));
