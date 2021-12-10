const solution = (nums, m) => {
  let ans = 0;

  const dfs = (L, score, time) => {
    if (time > m) return;
    if (L === nums.length) {
      ans = Math.max(ans, score);
    } else {
      dfs(L + 1, score + nums[L][0], time + nums[L][1]);
      dfs(L + 1, score, time);
    }
  };

  dfs(0, 0, 0);

  return ans;
};

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4]
    ],
    20
  )
);
console.log(
  solution(
    [
      [15, 6],
      [30, 11],
      [23, 8],
      [14, 4],
      [10, 3],
      [20, 7]
    ],
    25
  )
);
