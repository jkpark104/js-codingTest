/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  const tmp = [];

  const ans = [];

  const dfs = (L, s, sum) => {
    if (sum > n) return;
    if (L === k) {
      if (sum === n) ans.push([...tmp]);
    } else {
      for (let i = s; i < 10; i++) {
        tmp.push(i);
        dfs(L + 1, i + 1, sum + i);
        tmp.pop();
      }
    }
  };

  dfs(0, 1, 0);

  return ans;
};

console.log(combinationSum3(3, 9));
