const data =
`
1 2
1 3
2 3
2 4
`.trim().split('\n')

const [v, e, target, start] = [4, 4, 2, 1]

const INF = 1e9
const distance = new Array(v + 1).fill(INF)
const graph = new Array(v + 1).fill().map(() => [])

for (i of data) {
  const[a, b] = i.split(' ').map(x => parseInt(x))
  graph[a].push(b)
}
const ans = []
bfs()
ans.sort((a, b) => (a-b))
if (ans.length === 0) {
  console.log(-1)
}
else {
  for (i of ans) {
    console.log(i)
  }
}

function bfs() {
  q = []
  q.push(start)
  distance[start] = 0

  while (q.length != 0) {
    const now = q.shift()
    
    for (next of graph[now]) {
      if (distance[next] === INF) {
        distance[next] = distance[now] + 1
        if (distance[next] === target) {
          ans.push(next)
        }
        q.push(next)
      }
    }
  }
}