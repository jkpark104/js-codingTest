function solution(nums, n) {
  function isValid(target) {
    let count = 0;
    for (const num of nums) {
      count += Math.floor(num / target);
    }
    return n === count;
  }

  let start = 0;
  let end = Math.max(...nums);

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

console.log(solution([802, 743, 457, 539], 11));
