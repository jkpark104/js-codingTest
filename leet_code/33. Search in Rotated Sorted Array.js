const searchIndex = nums => {
  let start = 0;
  let end = nums.length - 1;

  let index = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[0] <= nums[mid]) start = mid + 1;
    else {
      index = mid;
      end = mid - 1;
    }
  }

  return index;
};

const binarySearch = (nums, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

const search = (nums, target) => {
  const firstRotatedIndex = searchIndex(nums);

  return Math.max(
    binarySearch(nums, target, 0, firstRotatedIndex - 1),
    binarySearch(nums, target, firstRotatedIndex, nums.length - 1)
  );
};

console.log(search([0, 1, 2, 4, 5, 6, 7], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
