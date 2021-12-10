const solution = (nums, m) => {
  let sum = 0;

  let ans = 0;

  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === m) ans += 1;

    if (hash[sum - m]) ans += hash[sum - m];

    hash[sum] = (hash[sum] || 0) + 1;
  }

  return ans;
};

const inputData = [
  [[1, 2, 3, -3, 1, 2], 3],
  [[-1, 0, 1], 0],
  [[-1, -1, -1, 1], 0]
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
