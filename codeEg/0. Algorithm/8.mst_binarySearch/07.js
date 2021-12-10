const isValid = (nums, mid, target) => {
  let prev = nums[0];
  let cnt = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - prev >= mid) {
      cnt += 1;
      prev = nums[i];
    }
  }

  return cnt >= target;
};

const solution = (nums, c) => {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = 1e9;

  let ans = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (isValid(nums, mid, c)) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return ans;
};

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
