/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  const hash = {};

  for (const num of nums) hash[num] = 1;

  for (let i = 1; i < 2 ** 31; i++) if (!hash[i]) return i;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
