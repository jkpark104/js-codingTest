'use strict'

function solution(n, edges) {
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
  const len = edges.length
  edges.sort((a, b) => b[2] - a[2])

  let ans = 0
  while (edges.length) {
    const [a, b, span] = edges.pop()
    if (find_parent(a) !== find_parent(b)) {
      ans += span
      union_parent(a, b)
    }
  }
  return ans
}

console.log(solution(9, [
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
  [8, 9, 15],
]))