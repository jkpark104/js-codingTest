function solution(nums) {
  function dfs(idx) {
    if (idx === -1) return;
    dfs(parent[idx]);
    stack.push(nums[idx]);
  }

  const n = nums.length;
  const dp = new Array(n).fill(0);
  const parent = new Array(n).fill(-1);

  let ans = 1;
  let idx = -1;
  for (let i = 1; i < n; i++) {
    let val = -1;
    for (let j = i - 1; j > -1; j--) {
      if (nums[i] > nums[j] && val < dp[j]) {
        val = dp[j];
        parent[i] = j;
      }
    }
    if (val !== -1) dp[i] = val + 1;
    if (ans < dp[i] + 1) {
      ans = dp[i] + 1;
      idx = i;
    }
  }
  const stack = [];
  dfs(idx);
  console.log(stack);
  return ans;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));
console.log(solution([1, 9, 8, 2, 3, 4, 5, 6, 7]));
console.log(solution([1, 2, 3, 5, 4]));
// 2 5 6 7 12
