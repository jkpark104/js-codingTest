const solution = nums => {
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  let answer = 'NO';
  const dfs = (L, sum) => {
    if (answer === 'YES') return;
    if (L === nums.length) {
      if (sum === total - sum) answer = 'YES';
    } else {
      dfs(L + 1, sum + nums[L]);
      dfs(L + 1, sum);
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution([5, 2, 6, 9, 10, 12]));
console.log(solution([3, 9, 11, 13]));
