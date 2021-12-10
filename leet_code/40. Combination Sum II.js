/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  const arr = candidates.sort((a, b) => a - b);

  const ans = [];
  const tmp = [];
  const com = (L, sum) => {
    if (sum === target) ans.push([...tmp]);
    if (sum > target) return;

    for (let i = L; i < arr.length; i++) {
      if (i > L && arr[i] === arr[i - 1]) continue;
      tmp.push(arr[i]);
      com(i + 1, sum + arr[i]);
      tmp.pop();
    }
  };

  com(0, 0);

  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
