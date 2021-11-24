/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  const n = height.length;
  const leftCol = [];
  const rightCol = [];
  let value = 0;
  for (let i = 0; i < n; i++) {
    value = Math.max(value, height[i]);
    leftCol.push(value);
  }
  value = 0;
  for (let i = n - 1; i > -1; i--) {
    value = Math.max(value, height[i]);
    rightCol.unshift(value);
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    const h = Math.min(leftCol[i], rightCol[i]);
    ans += h - height[i];
  }
  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
