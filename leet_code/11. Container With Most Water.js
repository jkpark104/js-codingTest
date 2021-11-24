/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let start = 0;
  let end = height.length - 1;

  let ans = 0;
  while (start <= end) {
    ans = Math.max(Math.min(height[start], height[end]) * (end - start), ans);

    height[start] > height[end] ? (end -= 1) : (start += 1);
  }

  return ans;
};

console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([1, 2, 4, 3]));
