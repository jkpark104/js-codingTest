const solution = nums => {
  let height = [0, 0];

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i + 1] > 0) {
      ans = Math.max(ans, ...height);
      height[0] += 1;
      height[1] = 0;
    } else if (nums[i] - nums[i + 1] < 0) {
      ans = Math.max(ans, ...height);
      height[1] += 1;
      height[0] = 0;
    } else {
      ans = Math.max(ans, ...height);
      height = [0, 0];
    }
  }

  return Math.max(ans, ...height) + 1;
};

const input_data = [
  [5, 3, 6, 7, 9, 8, 5, 3, 1, 2],
  [5, 2, 4, 7, 6, 3, 9, 10, 11],
  [1, 2, 3, 3, 4, 5, 6, 7, 7]
];

for (let data of input_data) {
  console.log(solution(data));
}
