/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b);

  const n = candidates.length;

  const tmp = [];

  const ans = [];
  const dfs = (L, s, sum, k) => {
    if (sum > target) return;
    if (L === k) {
      if (sum === target) ans.push([...tmp]);
    } else {
      for (let i = s; i < n; i++) {
        if (i > s && candidates[i] === candidates[i - 1]) continue;
        tmp.push(candidates[i]);
        dfs(L + 1, i + 1, sum + candidates[i], k);
        tmp.pop();
      }
    }
  };

  for (let i = 1; i < n + 1; i++) dfs(0, 0, 0, i);

  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
