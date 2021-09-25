function solution(nums, m) {
  let start = 0;
  let end = nums.length;
  nums.sort((a, b) => a - b);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === m) return mid + 1;
    if (nums[mid] > m) end = mid - 1;
    else start = mid + 1;
  }
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
