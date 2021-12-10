function solution(n, edges, distanceThreshold) {
  const graph = new Array(n).fill().map(() => new Array(0));

  for (const [a, b, c] of edges) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const chk = new Array(n).fill(0);
  let tmp = new Set();

  const dfs = (now, start, distance, visited) => {
    if (distance > distanceThreshold) return;

    for (const [next, cost] of graph[now]) {
      if (chk[next]) continue;
      chk[next] = 1;
      visited.push(next);

      if (distance + cost <= distanceThreshold) tmp.add(next);
      dfs(next, start, distance + cost, visited);
      chk[next] = 0;
      visited.pop();
    }
  };

  let ans = 0;
  let distance = Number.MAX_SAFE_INTEGER;

  for (let i = n - 1; i > -1; i--) {
    chk[i] = 1;
    tmp.clear();
    dfs(i, i, 0, []);

    if (distance > tmp.size) {
      distance = tmp.size;
      ans = i;
    }
    chk[i] = 0;
  }

  return ans;
}

console.log(
  solution(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1]
    ],
    4
  )
);
console.log(
  solution(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1]
    ],
    2
  )
);
