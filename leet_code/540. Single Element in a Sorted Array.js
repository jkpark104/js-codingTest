/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = nums => {
  if (nums.length === 1) return;

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    const leftLength =
      nums[mid] === nums[mid - 1] ? mid - start - 1 : mid - start;

    const rightLength = nums[mid] === nums[mid + 1] ? end - mid - 1 : end - mid;

    console.log();
  }
};

singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);
// singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);
