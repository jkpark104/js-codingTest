/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  let h = 0;
  const leftCol = new Array(height.length).fill(0);
  for (let i = 0; i < height.length; i++) {
    h = Math.max(h, height[i]);
    leftCol[i] = h;
  }
  h = 0;
  const rightCol = new Array(height.length).fill(0);
  for (let i = height.length - 1; i > -1; i--) {
    h = Math.max(h, height[i]);
    rightCol[i] = h;
  }

  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    ans += Math.min(leftCol[i], rightCol[i]) - height[i];
  }

  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
