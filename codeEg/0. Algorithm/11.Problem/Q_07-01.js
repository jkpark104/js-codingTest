function solution(nums, h) {
  function isValid(mid) {
    let cnt = 0;
    nums.forEach(el => {
      if (el > mid) cnt += 2;
      else cnt += 1;
    });
    return cnt <= h;
  }

  let start = 1;
  let end = 100000;

  let ans = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (isValid(mid)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
}

console.log(solution([29, 12, 24, 5, 19], 6));
