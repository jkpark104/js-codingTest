const solution = (n, nums) => {
  const indegrees = new Array(n + 1).fill(0);

  const graph = new Array(n + 1).fill().map(() => new Array(0));

  for (const [a, b] of nums) {
    indegrees[b] += 1;
    graph[a].push(b);
  }

  const q = [];

  for (let i = 1; i < n + 1; i++) if (indegrees[i] === 0) q.push(i);

  const ans = [];
  while (q.length) {
    const now = q.shift();
    ans.push(now);

    for (const next of graph[now]) {
      indegrees[next] -= 1;

      if (indegrees[next] === 0) q.push(next);
    }
  }

  return ans;
};

console.log(
  solution(6, [
    [1, 4],
    [5, 4],
    [4, 3],
    [2, 5],
    [2, 3],
    [6, 2]
  ])
);
