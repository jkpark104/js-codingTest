/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const isValid = (nums, k, mid) => {
  let count = 0;

  let end = 0;
  for (let start = 0; start < nums.length; start++) {
    while (end < nums.length && nums[end] - nums[start] <= mid) {
      end += 1;
    }

    count += end - start - 1;
  }

  return count >= k;
};

const smallestDistancePair = (nums, k) => {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = 1e6;

  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    isValid(nums, k, mid) ? ([ans, end] = [mid, mid - 1]) : (start = mid + 1);
  }

  return ans;
};

console.log(smallestDistancePair([1, 3, 1], 1));
console.log(smallestDistancePair([1, 1, 1], 2));
console.log(smallestDistancePair([1, 6, 1], 3));
