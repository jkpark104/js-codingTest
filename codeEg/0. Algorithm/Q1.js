// function solution(nums, k) {
//   let odd = 0;
//   let ans = 0;

//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 1) odd += 1;
//     if (odd === k) ans += 1;
//     if (hash[odd - k]) ans += hash[odd - k];
//     hash[odd] = hash[odd] + 1 || 1;
//   }
//   return ans;
// }

const solution = (nums, k) => {
  let odd = 0;
  let ans = 0;

  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) odd += 1;

    if (odd === k) ans += 1;

    if (hash[odd - k]) ans += hash[odd - k];

    hash[odd] = (hash[odd] || 0) + 1;
  }
  return ans;
};

console.log(solution([1, 1, 2, 1, 1], 3)); // 5
console.log(solution([1, 2, 1, 1, 2], 2)); // 5
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
console.log(solution([2, 4, 6], 1)); // 0
