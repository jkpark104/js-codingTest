const solution = nums => {
  const n = nums.length;

  const dp = new Array(n).fill(0);
  dp[0] = 1;

  const parent = new Array(n).fill(-1);

  let ans = 0;
  let maxIdx = -1;
  for (let i = 1; i < n; i++) {
    let idx = i;
    for (let j = i; j > -1; j--) {
      if (nums[j] < nums[i] && dp[idx] < dp[j]) {
        idx = j;
        parent[i] = j;
      }
    }
    dp[i] = dp[idx] + 1;

    if (ans < dp[i]) {
      ans = Math.max(ans, dp[i]);
      maxIdx = i;
    }
  }

  const stack = [];
  const findRoute = idx => {
    if (idx === -1) return;

    findRoute(parent[idx]);
    stack.push(nums[idx]);
  };

  findRoute(maxIdx);

  return ans;
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));
console.log(solution([1, 9, 8, 2, 3, 4, 5, 6, 7]));
console.log(solution([1, 2, 3, 5, 4]));
// 2 5 6 7 12
