function solution(n, edges) {
  function find_parent(x) {
    if (x != parent[x]) {
      parent[x] = find_parent(parent[x])
    }
    return parent[x]
  }

  function union_parent(a, b) {
    a = find_parent(a)
    b = find_parent(b)
    if (a > b) parent[a] = b
    else parent[b] = a
  }
  const parent = new Array(n + 1).fill().map((el, idx) => idx)

  for (let [x, y] of edges) {
    union_parent(x, y)
  }

  for (let i = 1; i < n + 1; i++) {
    find_parent(i)
  }
  return Array.from(new Set(parent)).length - 1
}

console.log(solution(7, [
  [1, 2],
  [2, 3],
  [1, 4],
  [1, 5]
]))