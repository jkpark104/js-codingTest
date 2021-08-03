"use strict"

function solution(board) {
  function bfs() {
    const q = [
      [0, 0]
    ]

    chk[0][0] = 1

    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    while (q.length) {
      const [x, y] = q.shift()

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]

        if (0 <= nx && nx < 7 && 0 <= ny && ny < 7) {
          if (!chk[nx][ny] && !board[nx][ny]) {
            chk[nx][ny] = chk[x][y] + 1
            q.push([nx, ny])
          }
        }
      }
    }
  }
  const chk = new Array(7).fill().map(() => new Array(7).fill(0))
  bfs()
  return chk[6][6] ? chk[6][6] - 1 : -1
}

console.log(solution([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 0],
]))