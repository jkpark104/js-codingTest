const solution = nums => {
  let idx = 0;

  while (idx < nums.length - 1 && nums[idx + 1] - nums[idx] > 0) idx += 1;
  if (idx === 0 || idx === nums.length - 1) return 'NO';
  while (idx < nums.length - 1 && nums[idx + 1] - nums[idx] < 0) idx += 1;

  return idx === nums.length - 1 ? 'YES' : 'NO';
};

const input_data = [
  [1, 2, 3, 4, 5, 3, 1],
  [1, 3, 4, 5, 5, 6, 4, 3],
  [1, 2, 3, 4, 5]
];

for (let data of input_data) {
  console.log(solution(data));
}
