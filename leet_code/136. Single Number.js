/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const hash = {};

  for (const num of nums) {
    if (hash[num]) delete hash[num];
    else hash[num] = 1;
  }

  return Object.keys(hash)[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
