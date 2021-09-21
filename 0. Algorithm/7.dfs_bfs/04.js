function solution(n, edges) {
  const graph = new Array(n + 1).fill().map(() => new Array(0));
  const chk = new Array(n + 1).fill(0);
  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  function dfs(now) {
    for (const next of graph[now]) {
      if (chk[next] === 0) {
        chk[next] = 1;
        dfs(next);
      }
    }
  }

  let ans = 0;
  for (let i = 1; i < n + 1; i++) {
    if (chk[i] === 0) {
      ans += 1;
      dfs(i);
    }
  }
  return ans;
}

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 4],
    [1, 5]
  ])
);
