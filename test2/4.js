const solution = (nums, t) => {
  const n = nums.length;

  const students = new Array(nums.length);

  let totalSum = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {}
  for (let i = 0; i < n; i++) {
    const number = nums[i].reduce((acc, cur) => acc + 2 ** (cur - 1), 0);
    totalSum += number;
    if (!number) ans += 1;
    else students.push(number);
  }

  const dfs = (L, sum) => {
    if (students.includes(sum)) return;
    if ((totalSum & sum) === totalSum) return;
    if (L === t + 1) {
      let res = 0;
      for (let i = 0; i < n; i++) {
        if ((students[i] & sum) !== students[i]) res += 1;
      }
      if (res === n) ans += 1;
    } else {
      dfs(L + 1, sum + 2 ** (L - 1));
      dfs(L + 1, sum);
    }
  };

  dfs(1, 0, 0);

  return ans;
};

console.log(solution([[2], [1, 3]], 4));
