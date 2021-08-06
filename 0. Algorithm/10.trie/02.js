function solution(n, edges) {
  const graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(100))

  for (let i = 1; i < n + 1; i++) {
    graph[i][i] = 0
  }

  for (let [x, y, cost] of edges) {
    graph[x][y] = cost
  }

  for (let k = 1; k < n + 1; k++) {
    for (let a = 1; a < n + 1; a++) {
      for (let b = 1; b < n + 1; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b])
      }
    }
  }
  
  return graph
}

console.log(solution(5, [
  [1, 2, 6],
  [1, 3, 3],
  [3, 2, 2],
  [2, 4, 1],
  [2, 5, 13],
  [3, 4, 5],
  [4, 2, 3],
  [4, 5, 7],
]))