const solution = (n, s, a, b, fares) => {
  const INF = Number.MAX_SAFE_INTEGER;

  const graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(INF));

  for (let i = 1; i < n + 1; i++) graph[i][i] = 0;

  for (const [a, b, fare] of fares) {
    graph[a][b] = fare;
    graph[b][a] = fare;
  }

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  let ans = INF;

  for (let i = 1; i < n + 1; i++) {
    ans = Math.min(ans, graph[s][i] + graph[i][a] + graph[i][b]);
  }

  return ans;
};

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25]
  ])
);
