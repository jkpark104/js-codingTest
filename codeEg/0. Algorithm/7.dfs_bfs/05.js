const solution = board => {
  const n = board.length;

  const dx = [1, 0, -1, 0, -1, 1, -1, 1];
  const dy = [0, 1, 0, -1, 1, 1, -1, -1];

  const dfs = (x, y) => {
    board[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  };

  let ans = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 1) {
        ans += 1;
        dfs(x, y);
      }
    }
  }
  return ans;
};

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]
  ])
);
