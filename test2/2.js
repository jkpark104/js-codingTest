const solution = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1] - nums[i];
  }
  // nums.pop();

  const n = nums.length - 1;

  let end = 0;
  let ans = 0;
  for (let start = 0; start < n; start++) {
    let prev = nums[start];
    while (end < n && nums[end] === prev) {
      prev = nums[end];
      end += 1;
    }

    if (end - start >= 2) ans += end - start - 1;
  }
  return ans;
};

console.log(solution([1, 2, 3, 7, 8, 9]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 5, 7, 6, 5, 4]));
