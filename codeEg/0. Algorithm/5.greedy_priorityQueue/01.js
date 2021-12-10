const solution = (nums, m) => {
  let cnt = 0;

  for (let i = nums.length - 1; i > -1; i--) {
    const coinNumber = Math.floor(m / nums[i]);
    m -= coinNumber * nums[i];
    cnt += coinNumber;
  }

  return cnt;
};

console.log(solution([1, 5, 10], 15));
