/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumMountainRemovals = nums => {
  const n = nums.length;

  const dp_left = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp_left[i] < dp_left[j] + 1)
        dp_left[i] = dp_left[j] + 1;
    }
  }

  const dp_right = new Array(n).fill(0);
  for (let i = n - 2; i > -1; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j] && dp_right[i] < dp_right[j] + 1)
        dp_right[i] = dp_right[j] + 1;
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    if (dp_left[i] && dp_right[i])
      res = Math.max(res, dp_left[i] + dp_right[i] + 1);
  }

  return n - res;
};

console.log(minimumMountainRemovals([1, 3, 1]));
console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]));
console.log(minimumMountainRemovals([4, 3, 2, 1, 1, 2, 3, 1]));
console.log(minimumMountainRemovals([1, 2, 3, 4, 4, 3, 2, 1]));
