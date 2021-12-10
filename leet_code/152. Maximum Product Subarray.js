/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
  let [max, min, ans] = [nums[0], nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const [_max, _min] = [max, min];

    max = Math.max(nums[i], nums[i] * _max, nums[i] * _min);
    min = Math.min(nums[i], nums[i] * _max, nums[i] * _min);

    ans = Math.max(ans, max);
  }
  return ans;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([0, 2]));
console.log(maxProduct([-3, -1, -1]));
console.log(maxProduct([-2, 0]));
console.log(maxProduct([-4, -3, -2]));
