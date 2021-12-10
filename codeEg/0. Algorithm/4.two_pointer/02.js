const solution = (nums, k) => {
  const hash = {};

  for (let i = 0; i < k - 1; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1;

  const ans = [];
  for (let i = k - 1; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;

    ans.push(Object.keys(hash).length);

    hash[nums[i - k + 1]] -= 1;
    if (!hash[nums[i - k + 1]]) delete hash[nums[i - k + 1]];
  }

  return ans;
};

const inputData = [
  [[20, 12, 20, 10, 23, 17, 10], 4],
  [[1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3]
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
