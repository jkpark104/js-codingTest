/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
  const hash = {};

  nums.forEach(num => {
    hash[num] = (hash[num] || 0) + 1;
  });

  return Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0];
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 1]));
console.log(findDuplicate([1, 1, 2]));
