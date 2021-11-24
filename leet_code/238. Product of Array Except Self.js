const productExceptSelf = nums => {
  const total = nums.reduce((acc, cur) => acc * cur, 1);
  const total_nonzero = nums.reduce((acc, cur) => acc * (cur || 1), 1);

  const zero = nums.filter(num => !num).length;

  return nums.map(num => (num ? total / num : zero === 1 ? total_nonzero : 0));
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
