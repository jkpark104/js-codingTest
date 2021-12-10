const spreadToTarget = (mid, s, e, graph) => {
  const q = [s];

  while (q.length) {
    const now = q.shift();
    if (now === e) return true;

    for (const [next, weight] of graph[now]) {
      if (mid <= weight) {
        q.push(next);
      }
    }
  }

  return false;
};

const solution = (n, edges, s, e) => {
  const graph = new Array(n + 1).fill().map(() => new Array(0));

  for (const [a, b, c] of edges) {
    graph[a].push([b, c]);
  }

  let start = 1;
  let end = 1e9;

  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (spreadToTarget(mid, s, e, graph)) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return ans;
};

console.log(
  solution(
    5,
    [
      [1, 2, 5],
      [1, 3, 3],
      [1, 4, 2],
      [2, 4, 2],
      [3, 4, 4],
      [4, 5, 3]
    ],
    1,
    5
  )
);
