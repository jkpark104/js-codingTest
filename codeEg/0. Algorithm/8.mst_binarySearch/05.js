const solution = (nums, n) => {
  let start = 1;
  let end = 10000;

  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums.reduce((acc, cur) => acc + Math.floor(cur / mid), 0) >= n) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return ans;
};

console.log(solution([802, 743, 457, 539], 11));
