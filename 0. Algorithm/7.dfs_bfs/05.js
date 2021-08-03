// function solution(board) {
//   function dfs(x, y) {
//     for (let i = 0; i < 8; i++) {
//       const [nx, ny] = [x + dx[i], y + dy[i]]
//       if (0 <= nx && nx < n && 0 <= ny && ny < n && !chk[nx][ny] && board[nx][ny]) {
//         chk[nx][ny] = 1
//         dfs(nx, ny)
//       }
//     }
//   }

//   const n = board.length
//   const pos = []

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j]) pos.push([i, j])
//     }
//   }

//   let ans = 0
//   const chk = new Array(n).fill().map(() => new Array(n).fill(0))
//   const dx = [1, 0, -1, 0, -1, 1, -1, 1]
//   const dy = [0, 1, 0, -1, 1, 1, -1, -1]
//   for (let [x, y] of pos) {
//     if (!chk[x][y]) {
//       chk[x][y] = 1
//       ans += 1
//       dfs(x, y)
//     }
//   }
//   return ans
// }

console.log(solution([
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]))

function solution(board) {
  const ans = 0
  const n = board.lenth
  const dx = [1, 0, -1, 0, -1, 1, -1, 1]
  const dy = [0, 1, 0, -1, 1, 1, -1, -1]

  function dfs(x, y) {
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k]
      const ny = y + dy[k]
      if (0 <= nx && nx < n && 0 <= ny && ny < n && board[nx][ny]) {
        board[nx][ny] = 0
        dfs(nx, ny)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(board[i][j]) {
        board[i][j] = 0
        ans += 1
        dfs(i, j)
      }
    }
  }
}