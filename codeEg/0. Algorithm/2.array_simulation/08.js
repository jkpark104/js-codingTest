const solution = nums => {
  const n = nums.length;

  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        nums[i][j] >
        Math.max(
          nums[i - 1] ? nums[i - 1][j] || 0 : 0,
          nums[i + 1] ? nums[i + 1][j] || 0 : 0,
          nums[i] ? nums[i][j - 1] || 0 : 0,
          nums[i] ? nums[i][j + 1] || 0 : 0
        )
      )
        ans += 1;
    }
  }

  return ans;
};

const input_data = [
  [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
  ]
];

for (let data of input_data) {
  console.log(solution(data));
}
