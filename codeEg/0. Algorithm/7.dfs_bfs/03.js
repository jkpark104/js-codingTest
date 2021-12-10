function solution(n, edges) {
  const graph = new Array(n + 1).fill().map(() => new Array(0));
  const chk = new Array(n + 1).fill(0);

  for (const [a, b] of edges) graph[a].push(b);

  let ans = 0;
  chk[1] = 1;

  function dfs(now) {
    if (now === 5) {
      ans += 1;
    } else {
      for (const next of graph[now]) {
        if (chk[next] === 0) {
          chk[next] = 1;
          dfs(next);
          chk[next] = 0;
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
