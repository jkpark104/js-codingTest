function solution(n, nums, s1, s2) {
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

  nums.forEach(([a, b]) => unionParent(a, b));

  return findParent(s1) === findParent(s2) ? 'YES' : 'NO';
}

console.log(
  solution(
    9,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 5],
      [6, 7],
      [7, 8],
      [8, 9]
    ],
    3,
    8
  )
);
