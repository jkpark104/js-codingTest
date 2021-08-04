'use strict'

// function solution(n, edges, s, e) {
//   function dfs(now, weight) {
//     if (now === e) {
//       ans = Math.max(ans, weight)
//     }

//     for (let [next, nw] of graph[now]) {
//       if (!chk[next]) {
//         chk[next] = 1
//         dfs(next, Math.min(nw, weight))
//         chk[next] = 0
//       }
//     }
//   }

//   const graph = new Array(n + 1).fill().map(() => new Array())
//   const chk = new Array(n + 1).fill(0)
//   let ans = 0
//   for (let [a, b, c] of edges) {
//     graph[a].push([b, c])
//   }
//   chk[s] = 1
//   dfs(s, Number.MAX_SAFE_INTEGER)
//   return ans
// }

console.log(solution(5, [
  [1, 2, 5],
  [1, 3, 3],
  [1, 4, 2],
  [2, 4, 2],
  [3, 4, 4],
  [4, 5, 3],
], 1, 5))

function solution(n, edges, s, e) {
  function binarySearch() {
    let start = 1
    let end = 1e9

    while (start <= end) {
      let mid = parseInt((start + end) / 2)

      if (isValid(mid)) {
        ans = mid
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }

  function isValid(mid) {
    const chk = new Array(n + 1).fill(0)

    const q = [s]
    chk[s] = 1

    while (q.length) {
      const now = q.shift()

      for (let [next, nw] of graph[now]) {
        if (!chk[next] && nw >= mid) {
          chk[next] = 1
          q.push(next)
        }
      }
    }
    return chk[e]
  }
  let ans = undefined
  const graph = new Array(n + 1).fill().map(() => new Array())
  for (let [a, b, c] of edges) {
    graph[a].push([b, c])
  }
  binarySearch()
  return ans
}
