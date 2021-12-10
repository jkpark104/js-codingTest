/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const ans = [];
  const tmp = [];

  const dfs = L => {
    if (L === nums.length) {
      ans.push([...tmp]);
    } else {
      tmp.push(nums[L]);
      dfs(L + 1);
      tmp.pop();
      dfs(L + 1);
    }
  };

  dfs(0);

  return ans;
};

console.log(subsets([1, 2, 3]));
