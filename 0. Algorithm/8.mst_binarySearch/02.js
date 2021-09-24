function solution(n, edges) {
  const parent = new Array(n + 1).fill().map((el, idx) => idx);

  function findParent(x) {
    if (x !== parent[x]) parent[x] = findParent(parent[x]);
    return parent[x];
  }

  function unionParent(a, b) {
    const c = findParent(a);
    const d = findParent(b);

    if (c > d) parent[c] = d;
    else parent[d] = c;
  }

  edges.sort((a, b) => a[2] - b[2]);

  return edges.reduce((acc, cur) => {
    let _acc = acc;
    const [a, b, cost] = cur;
    if (findParent(a) !== findParent(b)) {
      unionParent(a, b);
      _acc += cost;
    }
    return _acc;
  }, 0);
}

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
