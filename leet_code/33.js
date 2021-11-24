// 33. Search in Rotated Sorted Array

const binarySearch = (nums, target, _start, _end) => {
  let start = _start;
  let end = _end;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

const binarySearchIndex = nums => {
  let start = 0;
  let end = nums.length - 1;

  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] >= nums[0]) {
      start = mid + 1;
    } else {
      ans = mid;
      end = mid - 1;
    }
  }

  return ans;
};

const search = (nums, target) => {
  const index = binarySearchIndex(nums);

  const [first_start, first_end, second_start, second_end] = [
    0,
    index - 1,
    index,
    nums.length - 1
  ];

  const [val, other] = [
    binarySearch(nums, target, first_start, first_end),
    binarySearch(nums, target, second_start, second_end)
  ];

  return Math.max(val, other);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
