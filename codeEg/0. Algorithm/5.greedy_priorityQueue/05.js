const solution = (nums, m) => {
  const chk = new Array(Math.max(...nums) + 1).fill(0);

  let [minH, maxH] = [Math.min(...nums), Math.max(...nums)];

  for (const num of nums) chk[num] += 1;

  for (let i = 0; i < m; i++) {
    if (minH === maxH) return 0;

    chk[maxH] -= 1;
    chk[maxH - 1] += 1;
    chk[minH] -= 1;
    chk[minH + 1] += 1;
    if (!chk[maxH]) maxH -= 1;
    if (!chk[minH]) minH += 1;
  }

  return maxH - minH;
};

console.log(solution([1, 2, 3, 4, 5, 6], 8));
console.log(solution([2, 1, 3, 7, 5], 2));
console.log(solution([2, 2, 2, 2], 2));
