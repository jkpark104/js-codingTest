function solution(n, edges) {
  const graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  for (const [x, y] of edges) {
    graph[x][y] = 1;
  }
  let ans = 0;
  const chk = new Array(n + 1).fill(0);
  chk[1] = 1;

  function dfs(v) {
    if (v === 5) {
      ans += 1;
    } else {
      const next = graph[v];
      for (let i = 1; i < n + 1; i++) {
        if (next[i] && !chk[i]) {
          chk[i] = 1;
          dfs(i);
          chk[i] = 0;
        }
      }
    }
  }

  dfs(1);
  return ans;
}

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
