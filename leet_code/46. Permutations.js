/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const ans = [];
  const tmp = [];

  const chk = new Array(nums.length).fill(0);
  const per = L => {
    if (L === nums.length) {
      ans.push([...tmp]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (chk[i]) continue;
        chk[i] = 1;
        tmp.push(nums[i]);
        per(L + 1);
        chk[i] = 0;
        tmp.pop();
      }
    }
  };

  per(0);

  return ans;
};

console.log(permute([1, 2, 3]));
