const solution = (nums, m) => {
  const ans = [];
  const tmp = [];

  const dfs = (L, chk) => {
    if (L === m) {
      ans.push([...tmp]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (chk[i]) continue;
        tmp.push(nums[i]);
        chk[i] = 1;
        dfs(L + 1, chk);
        tmp.pop();
        chk[i] = 0;
      }
    }
  };

  dfs(0, new Array(nums.length + 1).fill(0));

  return ans;
};

console.log(solution([3, 6, 9], 2));
