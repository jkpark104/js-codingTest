/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  const obj = {};

  for (const num of nums) {
    if (num > 0) obj[num] = 1;
  }

  let num = 1;
  for (const key of Object.keys(obj)) {
    if (num !== +key) return num;
    num += 1;
  }
  return num;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
