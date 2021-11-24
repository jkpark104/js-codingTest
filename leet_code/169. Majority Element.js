/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  const n = nums.length;

  const hash = {};

  for (const num of nums) hash[num] = (hash[num] || 0) + 1;

  return Object.entries(hash)
    .filter(([, value]) => value > n / 2)
    .map(([key]) => +key);
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
