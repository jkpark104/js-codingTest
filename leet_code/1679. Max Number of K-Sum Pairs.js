/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
  const hash = {};

  let ans = 0;
  for (const num of nums) {
    if (hash[k - num]) {
      ans += 1;
      hash[k - num] -= 1;
    } else {
      hash[num] = (hash[num] || 0) + 1;
    }
  }

  return ans;
};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));
