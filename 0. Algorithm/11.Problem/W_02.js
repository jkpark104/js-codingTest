function solution(nums, m) {
  const n = nums.length;

  let res = 1;
  let start = 0;
  let ans = 0;
  for (let end = 0; end < n; end++) {
    res *= nums[end];
    while (start < n && res > m) {
      res /= nums[start];
      start += 1;
    }
    ans += end - start + 1;
  }
  return ans;
}

console.log(solution([1, 2, 3], 1)); // 1
console.log(solution([2, 3, 3, 2, 5], 20)); // 11
console.log(solution([1, 1, 1, 1], 3)); // 10
