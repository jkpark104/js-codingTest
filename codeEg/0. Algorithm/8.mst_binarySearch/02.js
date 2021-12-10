const solution = (n, edges) => {
  const parent = new Array(n + 1).fill().map((_, i) => i);

  const findParent = x => {
    if (x !== parent[x]) parent[x] = findParent(parent[x]);

    return parent[x];
  };

  const unionParent = (_a, _b) => {
    const [a, b] = [findParent(_a), findParent(_b)];

    a > b ? (parent[a] = b) : (parent[b] = a);
  };

  edges.sort((a, b) => a[2] - b[2]);

  let cost = 0;

  for (const [a, b, c] of edges) {
    if (findParent(a) !== findParent(b)) {
      cost += c;
      unionParent(a, b);
    }
  }

  return cost;
};

console.log(
  solution(9, [
    [1, 2, 12],
    [1, 9, 25],
    [2, 3, 10],
    [2, 8, 17],
    [2, 9, 8],
    [3, 4, 18],
    [3, 7, 55],
    [4, 5, 44],
    [5, 6, 60],
    [5, 7, 38],
    [7, 8, 35],
    [8, 9, 15]
  ])
);
