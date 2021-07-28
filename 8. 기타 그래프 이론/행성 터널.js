"use strict"

function find_parent(x) {
  if (parent[x] != x) {
    parent[x] = find_parent(parent[x])
  }
  return parent[x]
}

function union_parent(a, b) {
  a = find_parent(a)
  b = find_parent(b)

  if (a > b) {
    parent[a] = b
  } else {
    parent[b] = a
  }
}

let data = `
11 -15 -15
14 -5 -15
-1 -1 -5
10 -4 -1
19 -4 19
`.trim().split('\n')

const n = 5
data = data.map((el) => el.split(' ').map(Number))
const parent = new Array(n+1).fill().map((el, idx) => idx)
const x = []
const y = []
const z = []

data.forEach((e, i) => {
  x.push([e[0], i + 1])
  y.push([e[1], i + 1])
  z.push([e[2], i + 1])
})

x.sort((a, b) => a[0] - b[0])
y.sort((a, b) => a[0] - b[0])
z.sort((a, b) => a[0] - b[0])

const edges = []
for (let i = 0; i < n - 1; i++) {
  edges.push([x[i + 1][0] - x[i][0], x[i][1], x[i + 1][1]])
  edges.push([y[i + 1][0] - y[i][0], y[i][1], y[i + 1][1]])
  edges.push([z[i + 1][0] - z[i][0], z[i][1], z[i + 1][1]])
}
edges.sort((a, b) => a[0] - b[0])

let ans = 0
for (let e of edges) {
  const [cost, x, y] = e

  if (parent[x] !== parent[y]) {
    union_parent(x, y)
    ans += cost
  }
}

console.log(ans)