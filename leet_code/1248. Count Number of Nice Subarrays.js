/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
  let ans = 0;
  const n = nums.length;

  const hash = {};
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2) cnt += 1;
    if (cnt === k) ans += 1;
    if (hash[cnt - k]) ans += hash[cnt - k];

    hash[cnt] = (hash[cnt] || 0) + 1;
  }

  return ans;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
