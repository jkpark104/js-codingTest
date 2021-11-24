/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const isValid = (nums, mid, target) => {
  let end = 0;
  let cnt = 0;
  for (let start = 0; start < nums.length; start++) {
    while (end < nums.length && nums[end] - nums[start] <= mid) {
      end += 1;
    }
    cnt += end - start - 1;
  }
  // console.log(`cnt:${cnt}, mid:${mid}, target:${target}`);
  return cnt >= target;
};

const smallestDistancePair = (nums, k) => {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = 1e6;

  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(`mid:${mid}`);
    if (isValid(nums, mid, k)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  return ans;
};

console.log(smallestDistancePair([1, 3, 1], 1));
console.log(smallestDistancePair([1, 1, 1], 2));
console.log(smallestDistancePair([1, 6, 1], 3));
