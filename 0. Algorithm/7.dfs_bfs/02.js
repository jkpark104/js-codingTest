// function solution(n, edges) {
//   const path = [1]

//   function dfs(v) {
//     if (v === n) {
//       ans += 1
//       console.log(path)
//     } else {
//       for (let i = 1; i < n + 1; i++) {
//         if (graph[v][i] && !chk[i]) {
//           chk[i] = true
//           path.push(i)
//           dfs(i)
//           path.pop()
//           chk[i] = false
//         }
//       }
//     }
//   }

//   const graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0))
//   for (let [x, y] of edges) {
//     graph[x][y] = 1
//   }

//   const chk = new Array(n + 1).fill(false)
//   chk[1] = true
//   let ans = 0
//   dfs(1)

//   return ans
// }

console.log(solution(5, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]))

function solution(n, edges) {
  function dfs(v) {
    if (v === 5) {
      ans += 1
    } else {
      const next = graph[v]
      for (let i = 1; i < n + 1; i++) {
        if (next[i] && !chk[i]) {
          chk[i] = 1
          dfs(i)
          chk[i] = 0
        }
      }
    }
  }
  const graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0))

  for (let [x, y] of edges) {
    graph[x][y] = 1
  }
  let ans = 0
  const chk = new Array(n + 1).fill(0)
  chk[1] = 1
  dfs(1)
  return ans
}