function solution(n, edges) {
  function dfs(pos) {
    if (pos === n) {
      ans += 1
    } else {
      for (let next of graph[pos]) {
        if (!chk[next]) {
          chk[next] = true
          dfs(next)
          chk[next] = false
        }
      }
    }
  }

  const graph = new Array(n + 1).fill().map(() => new Array())
  for (let [x, y] of edges) {
    graph[x].push(y)
  }

  const chk = new Array(n + 1).fill(false)
  chk[1] = true
  let ans = 0
  dfs(1)

  return ans
}

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