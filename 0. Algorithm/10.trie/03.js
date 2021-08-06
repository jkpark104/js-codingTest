function solution(n, edges) {
  const graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(100))

  for (let i = 1; i < n + 1; i++) {
    graph[i][i] = 0
  }

  for (let [x, y] of edges) {
    graph[x][y] = 1
    graph[y][x] = 1
  }

  for (let k = 1; k < n + 1; k++) {
    for (let a = 1; a < n + 1; a++) {
      for (let b = 1; b < n + 1; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b])
      }
    }
  }

  let president = 1000
  let score = new Array(n + 1).fill(0)
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === j) continue
      score[i] = Math.max(score[i], graph[i][j])
    }
    president = Math.min(president, score[i])
  }
  return [president, score.filter(x => x === president).length]
}

console.log(solution(5, [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [2, 4],
  [5, 3],
]))