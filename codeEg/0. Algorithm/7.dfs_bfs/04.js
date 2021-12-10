const solution = (n, edges) => {
  const chk = new Array(n + 1).fill(0);
  const graph = new Array(n + 1).fill().map(() => new Array(0));

  const dfs = v => {
    for (const next of graph[v]) {
      if (chk[next]) continue;
      chk[next] = 1;
      dfs(next);
    }
  };

  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  let ans = 0;
  for (let i = 1; i < n + 1; i++) {
    if (chk[i]) continue;
    chk[i] = 1;
    ans += 1;
    dfs(i);
  }

  return ans;
};

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 4],
    [1, 5]
  ])
);
