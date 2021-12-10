const solution = board => {
  const q = [[0, 0]];

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const chk = new Array(7).fill().map(() => new Array(7).fill(0));
  chk[0][0] = 1;
  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < 7 && ny >= 0 && ny < 7) {
        if (board[nx][ny] === 0 && chk[nx][ny] === 0) {
          chk[nx][ny] = chk[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  return chk[6][6] - 1;
};

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
