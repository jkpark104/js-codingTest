function solution(grid, clockwise) {
  const n = grid.length;

  const ans = new Array(n).fill('');

  for (let i = 0; i < n; i++) {
    let [x, y] = [n - 1 - i, clockwise ? 0 : grid[n - 1 - i].length - 1];
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j !== 0) {
        j % 2
          ? ([x, y] = [(x += 1), (y += 1)])
          : clockwise
          ? (y += 1)
          : (y -= 1);
      }

      ans[i] = clockwise ? grid[x][y] + ans[i] : ans[i] + grid[x][y];
    }
  }
  return ans;
}

console.log(solution(['1', '234', '56789'], true));
console.log(solution(['A', 'MAN', 'DRINK', 'WATER11'], false));
