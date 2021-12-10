/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temperatures => {
  const n = temperatures.length;

  const ans = new Array(n).fill(0);

  const stack = [];
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const targetIdx = stack.pop();
      ans[targetIdx] = i - targetIdx;
    }
    stack.push(i);
  }

  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
