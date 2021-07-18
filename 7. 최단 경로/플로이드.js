const input = `
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4
`.trim().split('\n')

const v = 5
const e = 14
const INF = 1e9
const graph = new Array(v+1).fill().map(() => new Array(v+1).fill(INF))

for (let i=1; i<v+1; i++) {
  graph[i][i] = 0
}

for (i of input) {
  const [a, b, c] = i.split(' ').map(Number)
  graph[a][b] = Math.min(graph[a][b], c)
}

for (let k=1; k<v+1; k++) {
  for (let a=1; a<v+1; a++) {
    for (let b=1; b<v+1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k]+graph[k][b])
    }
  }
}

for (let i=1; i<v+1; i++) {
  graph[i] = graph[i].splice(1).map(x => {
    if (x == INF) { 
      return 0
    } else {
      return x
    }
  })
  console.log(...graph[i])
}