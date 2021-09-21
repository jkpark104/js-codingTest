function solution(board) {
  const n = 7;
  const chk = new Array(n).fill().map(() => new Array(n).fill(0));

  const q = [[0, 0]];

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  chk[0][0] = 1;
  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (chk[nx][ny] === 0 && board[nx][ny] === 0) {
          chk[nx][ny] = chk[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  return chk[n - 1][n - 1] ? chk[n - 1][n - 1] - 1 : -1;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0]
  ])
);
