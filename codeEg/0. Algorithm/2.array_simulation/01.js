const solution = (nums, m) => {
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < nums.length; j++) {
      nums[j - 1] = nums[j] - nums[j - 1];
    }
    nums.pop();
  }
  return nums;
};

const input_data = [
  [[5, 3, 7, 9, -2], 1],
  [[5, 3, 7, 9, -2], 2]
];

for (let data of input_data) {
  console.log(solution(data[0], data[1]));
}
