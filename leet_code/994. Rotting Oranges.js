/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = grid => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const [n, m] = [grid.length, grid[0].length];

  const chk = new Array(n).fill().map(() => new Array(m).fill(0));

  const q = [];

  let unmatured = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        chk[i][j] = 1;
        q.push([i, j]);
      } else if (grid[i][j] === 1) unmatured += 1;
    }
  }

  let ans = 0;
  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (grid[nx][ny] === 1 && chk[nx][ny] === 0) {
          unmatured -= 1;
          chk[nx][ny] = chk[x][y] + 1;
          ans = Math.max(ans, chk[nx][ny] - 1);
          q.push([nx, ny]);
        }
      }
    }
  }

  return unmatured === 0 ? ans : -1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ])
);
