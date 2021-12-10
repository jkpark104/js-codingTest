const solution = (n, edges) => {
  const graph = new Array(n + 1).fill().map(() => new Array(0));

  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  const chk = new Array(n + 1).fill(0);

  let ans = 0;
  const dfs = v => {
    if (v === n) ans += 1;
    else {
      for (const next of graph[v]) {
        if (chk[next]) continue;
        chk[next] = 1;
        dfs(next);
        chk[next] = 0;
      }
    }
  };

  chk[1] = 1;
  dfs(1);

  return ans;
};

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5]
  ])
);
