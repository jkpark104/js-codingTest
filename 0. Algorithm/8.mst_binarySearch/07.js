function solution(nums, c) {
  nums.sort((a, b) => a - b);

  function isValid(mid) {
    let now = 0;
    let cnt = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[now] >= mid) {
        cnt += 1;
        now = i;
      }
    }

    return cnt >= c;
  }

  let start = 0;
  let end = 1e9;

  let ans = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (isValid(mid)) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return ans;
}

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
