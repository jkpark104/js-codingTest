function solution(nums, m) {
  function isValid(mid) {
    let cnt = 0;
    let sum = 0;

    for (const num of nums) {
      if (sum + num > mid) {
        cnt += 1;
        sum = num;
      } else sum += num;
    }
    if (sum) cnt += 1;
    return cnt <= m;
  }

  let start = 1;
  let end = 10001;

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

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));
