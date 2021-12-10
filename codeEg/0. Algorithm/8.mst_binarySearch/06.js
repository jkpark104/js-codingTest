const isValid = (nums, mid, target) => {
  let tmp = 0;
  let cnt = 0;

  for (const num of nums) {
    if (tmp + num <= mid) tmp += num;
    else {
      cnt += 1;
      tmp = num;
    }
  }

  if (tmp) cnt += 1;

  return cnt <= target;
};

const solution = (nums, m) => {
  let start = 1;
  let end = 10000;

  let ans = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (isValid(nums, mid, m)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  return ans;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));
