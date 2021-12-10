const solution = (n, nums, s1, s2) => {
  const parent = new Array(n + 1).fill().map((_, i) => i);

  const findParent = x => {
    if (x !== parent[x]) parent[x] = findParent(parent[x]);

    return parent[x];
  };

  const unionParent = (_a, _b) => {
    const [a, b] = [findParent(_a), findParent(_b)];

    a > b ? (parent[a] = b) : (parent[b] = a);
  };

  for (const [a, b] of nums) unionParent(a, b);

  return findParent(s1) === findParent(s2) ? 'YES' : 'NO';
};

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
