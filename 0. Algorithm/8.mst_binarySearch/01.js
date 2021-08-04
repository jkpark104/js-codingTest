'use strict'

function solution(n, nums, s1, s2) {
  function find_parent(x) {
    if (x !== parent[x]) {
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

  for (let [x, y] of nums) {
    union_parent(x, y)
  }
  return find_parent(s1) === find_parent(s2) ? 'YES' : 'NO'
}

console.log(solution(9, [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [6, 7],
  [7, 8],
  [8, 9],
], 3, 8))