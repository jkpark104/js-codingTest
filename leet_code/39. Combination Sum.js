/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
  const n = candidates.length;

  const ans = [];
  const tmp = [];
  const com = (idx, sum) => {
    if (sum === target) ans.push([...tmp]);
    if (sum >= target) return;
    if (idx === n) return;

    tmp.push(candidates[idx]);
    com(idx, sum + candidates[idx]);
    tmp.pop();
    com(idx + 1, sum);
  };

  com(0, 0);

  return ans;
};

console.log(combinationSum([2, 3, 6, 7], 7));
