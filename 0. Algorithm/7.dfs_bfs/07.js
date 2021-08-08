function solution(board) {
  function bfs() {
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]

    const q = []
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) q.push([i, j])
      }
    }

    while (q.length) {
      const [x, y] = q.shift()

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]

        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (board[nx][ny] === 0) {
            board[nx][ny] = 1
            chk[nx][ny] = chk[x][y] + 1
            ans = chk[nx][ny]
            q.push([nx, ny])
          }
        }
      }
    }
  }
  const n = board.length
  const m = board[0].length
  const chk = new Array(n).fill().map(() => new Array(m).fill(0))
  let ans = undefined
  bfs()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) return -1
    }
  }
  return ans
}

console.log(solution([
  [0, 0, -1, 0, 0, 0],
  [0, 0, 1, 0, -1, 0],
  [0, 0, -1, 0, 0, 0],
  [0, 0, 0, 0, -1, 1],
]))

