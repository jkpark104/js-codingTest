function solution(board) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const n = board.length;

  const heights = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      heights[board[i][j]] = 1;
    }
  }

  let ans = 0;
  for (const height of Object.keys(heights)) {
    const chk = new Array(n).fill().map(() => new Array(n).fill(0));
    let sum = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (chk[i][j] === 0 && board[i][j] > +height) {
          chk[i][j] = 1;
          sum += 1;
          const q = [[i, j]];
          while (q.length) {
            const [x, y] = q.shift();

            for (let i = 0; i < 4; i++) {
              const [nx, ny] = [x + dx[i], y + dy[i]];
              if (
                nx >= 0 &&
                nx < n &&
                ny >= 0 &&
                ny < n &&
                chk[nx][ny] === 0 &&
                board[nx][ny] > +height
              ) {
                chk[nx][ny] = 1;
                q.push([nx, ny]);
              }
            }
          }
        }
      }
    }
    ans = Math.max(ans, sum);
  }

  return ans;
}

console.log(
  solution([
    [6, 8, 2, 6, 2],
    [3, 2, 3, 4, 6],
    [6, 7, 3, 3, 2],
    [7, 2, 5, 3, 6],
    [8, 9, 5, 2, 7]
  ])
);
