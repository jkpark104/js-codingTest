const solution = nums => {
  let ans = 0;
  let height = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 0) height += nums[i + 1] - nums[i];
    else {
      ans = Math.max(height, ans);
      height = 0;
    }
  }

  return Math.max(height, ans);
};

const inputData = [
  [5, 2, 4, 7, 7, 3, 9, 10, 11],
  [8, 12, 2, 3, 7, 6, 20, 3]
];

for (const data of inputData) {
  console.log(solution(data));
}

// function solution(nums) {
//   let ans = 0
//   let height = 0

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] < nums[i]) {
//       height += (nums[i] - nums[i - 1])
//     } else {
//       ans = Math.max(ans, height)
//       height = 0
//     }
//   }
//   ans = Math.max(ans, height)
//   return ans
// }
