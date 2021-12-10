const solution = nums => {
  const row = [];
  const col = [];

  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let row_value = Number.MAX_SAFE_INTEGER;
    let col_value = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < n; j++) {
      row_value = Math.min(row_value, nums[i][j]);
      col_value = Math.min(col_value, nums[j][i]);
    }
    row.push(row_value);
    col.push(col_value);
  }

  const ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i][j] === Math.min(row[i], col[j])) ans.push(nums[i][j]);
    }
  }

  return ans.sort((a, b) => a - b);
};

const input_data = [
  [
    [4, 6, 22, 1],
    [9, 3, 10, 12],
    [30, 7, 20, 2],
    [15, 8, 5, 13]
  ]
];

for (let data of input_data) {
  console.log(solution(data));
}
