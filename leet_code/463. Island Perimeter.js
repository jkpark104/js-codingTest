/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  const n = grid.length;
  const m = grid[0].length;

  let ans = 0;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (!grid[x][y]) continue;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (grid[nx][ny] === 0) {
            ans += 1;
          }
        } else {
          ans += 1;
        }
      }
    }
  }

  return ans;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ])
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
