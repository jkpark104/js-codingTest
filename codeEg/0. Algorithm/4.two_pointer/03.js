const solution = (nums, m) => {
  const n = nums.length;

  let end = 0;
  let sum = 0;
  let ans = 0;

  for (let start = 0; start < n; start++) {
    while (end < n && sum < m) {
      sum += nums[end];
      end += 1;
    }
    if (sum === m) ans += 1;

    sum -= nums[start];
  }

  return ans;
};

const inputData = [
  [[1, 2, 1, 3, 1, 1, 1, 2], 6],
  [[1, 1, 1, 1, 1, 1], 3],
  [[1, 2, 1, 2, 1, 2, 1], 3]
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
