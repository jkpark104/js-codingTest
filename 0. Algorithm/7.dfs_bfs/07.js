function solution(board) {
  const q = [];
  const n = board.length;
  const m = board[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        q.push([i, j]);
      }
    }
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 0) {
        board[nx][ny] = board[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) return -1;
      ans = Math.max(ans, board[i][j]);
    }
  }
  return ans - 1;
}

console.log(
  solution([
    [0, 0, -1, 0, 0, 0],
    [0, 0, 1, 0, -1, 0],
    [0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 1]
  ])
);
