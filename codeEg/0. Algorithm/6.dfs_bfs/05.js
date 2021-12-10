const solution = (nums, c) => {
  let ans = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  const tSum = nums.reduce((acc, cur) => acc + cur);

  function dfs(L, s, t) {
    cnt += 1;
    if (s > c) return;
    if (s + (tSum - t) < ans) return;
    if (L === nums.length) {
      if (s <= c) ans = Math.max(ans, s);
    } else {
      dfs(L + 1, s + nums[L], t + nums[L]);
      dfs(L + 1, s, t + nums[L]);
    }
  }
  dfs(0, 0, 0);
  console.log(`cnt: ${cnt}`);
  return ans;
};

console.log(solution([81, 58, 42, 33, 61], 259));
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));
