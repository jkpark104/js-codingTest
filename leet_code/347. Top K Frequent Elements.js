/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const hash = {};

  for (const num of nums) hash[num] = (hash[num] || 0) + 1;

  const res = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

  return res.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
