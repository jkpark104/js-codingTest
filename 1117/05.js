const solution = (n, relations) => {
  const indegrees = new Array(n + 1).fill(0);

  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  const graph = new Array(n + 1).fill().map(() => new Array(0));

  for (const [a, b, c] of relations) {
    indegrees[a] += 1;
    graph[b].push([a, c]);
  }

  const q = [];
  for (let i = 1; i < n; i++)
    if (indegrees[i] === 0) {
      q.push(i);
      dp[i][i] = 1;
    }

  while (q.length) {
    const now = q.shift();

    for (const [next, count] of graph[now]) {
      for (let i = 1; i < n; i++) {
        dp[i][next] += dp[i][now] * count;
      }
      indegrees[next] -= 1;
      if (indegrees[next] === 0) q.push(next);
    }
  }

  return dp.map(row => row[n]);
};

console.log(
  solution(7, [
    [5, 1, 2],
    [5, 2, 2],
    [7, 5, 2],
    [6, 5, 2],
    [6, 3, 3],
    [6, 4, 4],
    [7, 6, 3],
    [7, 4, 5]
  ])
);
