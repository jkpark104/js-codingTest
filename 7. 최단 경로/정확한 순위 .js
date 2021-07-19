const input_data = `
1 5
3 4
4 2
4 6
5 2
5 4
`.trim().split('\n')

const [v, e] = [6, 6]
const INF = 1e9
const graph = new Array(v + 1).fill().map(() => new Array(v + 1).fill(INF))

for (let i = 1; i < v + 1; i++) {
  graph[i][i] = 0
}

for (let data of input_data) {
  const [a, b] = data.split(' ').map(Number)
  graph[a][b] = 1
}

for (let k = 1; k < v + 1; k++) {
  for (let a = 1; a < v + 1; a++) {
    for (let b = 1; b < v + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b])
      }
    }
  }

let ans = 0
for (let i=1; i<v+1; i++) {
  let cnt = true
  for (let j=1; j<v+1; j++) {
    if (graph[i][j] == INF && graph[j][i] == INF) {
      cnt = false
    }
  }
  if (cnt) ans += 1
}

console.log(ans)