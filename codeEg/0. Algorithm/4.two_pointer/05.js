const solution = (nums, m) => {
  const n = nums.length;

  let sum = 0;

  let start = 0;

  let ans = 0;
  for (let end = 0; end < n; end++) {
    sum += nums[end];

    while (start < n && sum > m) {
      sum -= nums[start];
      start += 1;
    }

    ans += end - start + 1;
  }

  return ans;
};

const inputData = [
  [[1, 3, 1, 2, 3], 5],
  [[1, 1, 1, 1, 1, 1], 3],
  [[1, 1, 2, 2, 1, 2, 1, 3, 2], 5]
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
