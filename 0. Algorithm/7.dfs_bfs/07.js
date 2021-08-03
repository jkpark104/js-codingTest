// function solution(board) {
//   const n = board.length
//   const m = board[0].length

//   let mature = []
//   const fresh = []
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (board[i][j] === 1) {
//         mature.push([i, j])
//       } else if (board[i][j] === 0) {
//         fresh.push([i, j])
//       }
//     }
//   }
//   let freshTomato = fresh.length
//   let prevTomato = 0
//   if (freshTomato === 0) return 0
//   const chk = new Array(n).fill().map(() => new Array(m).fill(0))
//   const dx = [1, 0, -1, 0]
//   const dy = [0, 1, 0, -1]
//   let ans = 1
//   while (freshTomato !== 0) {
//     const tmpArray = []
//     for (let k = 0; k < mature.length; k++) {
//       const [x, y] = mature[k]
//       for (let i = 0; i < 4; i++) {
//         const [nx, ny] = [x + dx[i], y + dy[i]]
//         if (0 <= nx && nx < n && 0 <= ny && ny < m && !chk[nx][ny] && !board[nx][ny]) {
//           tmpArray.push([nx, ny])
//           chk[nx][ny] = 1
//           freshTomato -= 1
//         }
//       }
//     }
//     if (freshTomato <= 0) return ans
//     if (prevTomato === freshTomato) return -1
//     prevTomato = freshTomato
//     mature = tmpArray
//     ans += 1
//   }
// }

console.log(solution([
  [0, 0, -1, 0, 0, 0],
  [0, 0, 1, 0, -1, 0],
  [0, 0, -1, 0, 0, 0],
  [0, 0, 0, 0, -1, 1],
]))

function solution(board) {
  function bfs() {
    while (q.length) {
      const [x, y] = q.shift()
      for (let j = 0; j < 4; j++) {
        const [nx, ny] = [x + dx[j], y + dy[j]]
        if (0 <= nx && nx < n && 0 <= ny && ny < m && !board[nx][ny]) {
          board[nx][ny] = 1
          chk[nx][ny] = chk[x][y] + 1
          q.push([nx, ny])
          ans = chk[nx][ny]
        }
      }
    }
  }
  const n = board.length
  const m = board[0].length
  let ans = 0
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  const chk = new Array(n).fill().map(() => new Array(m).fill(0))

  const q = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        q.push([i, j])
      }
    }
  }
  bfs()
  // board에 0이 있으면 return -1
  return ans
}