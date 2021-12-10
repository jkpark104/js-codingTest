/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const getSubarray = (nums, k) => {
  const hash = {};

  let start = 0;
  let result = 0;

  let type = 0;
  for (let end = 0; end < nums.length; end++) {
    if (!hash[nums[end]]) type += 1;
    hash[nums[end]] = (hash[nums[end]] || 0) + 1;

    while (type > k) {
      hash[nums[start]] -= 1;
      if (!hash[nums[start]]) type -= 1;
      start += 1;
    }

    result += end - start + 1;
  }

  return result;
};

const subarraysWithKDistinct = (nums, k) =>
  getSubarray(nums, k) - getSubarray(nums, k - 1);

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3));
