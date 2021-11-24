/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const n = Math.floor(target / Math.min(...candidates));

  const ans = [];

  const tmp = [];

  const dfs = (L, s, k, sum) => {
    if (sum > target) return;
    if (L === k) {
      // console.log(tmp);
      if (sum === target) ans.push([...tmp]);
    } else {
      for (let i = s; i < candidates.length; i++) {
        tmp.push(candidates[i]);
        dfs(L + 1, i, k, sum + candidates[i]);
        tmp.pop();
      }
    }
  };

  for (let i = 1; i < n + 1; i++) {
    dfs(0, 0, i, 0);
  }

  return ans;
};

console.log(combinationSum([2, 3, 6, 7], 7));
