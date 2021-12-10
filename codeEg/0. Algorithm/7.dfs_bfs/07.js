const solution = board => {
  const n = board.length;
  const m = board[0].length;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let unmatured = 0;
  const q = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) q.push([i, j]);
      if (board[i][j] === 0) unmatured += 1;
    }
  }

  if (!unmatured) return 0;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (board[nx][ny] === 0) {
          unmatured -= 1;
          board[nx][ny] = board[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  return unmatured ? -1 : Math.max(...board.map(row => Math.max(...row))) - 1;
};

console.log(
  solution([
    [0, 0, -1, 0, 0, 0],
    [0, 0, 1, 0, -1, 0],
    [0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 1]
  ])
);
