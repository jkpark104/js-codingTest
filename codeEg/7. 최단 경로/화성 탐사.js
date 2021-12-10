"use strict"

function solution(table) {
  const n = table.length

  const INF = 1e9
  const distance = new Array(n).fill().map(() => new Array(n).fill(INF))

  distance[0][0] = table[0][0]
  const q = []
  q.push([table[0][0], 0, 0])

  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  while (q.length) {
    q.sort((a, b) => a[0] - b[0])
    const [dist, x, y] = q.shift()

    if (dist > distance[x][y]) continue

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (distance[nx][ny] > dist + table[nx][ny]) {
          distance[nx][ny] = dist + table[nx][ny]
          q.push([distance[nx][ny], nx, ny])
        }
      }
    }
  }
  return distance[n-1][n-1]
}

const input_data = `
9 0 5 1 1 5 3
4 1 2 1 6 5 3
0 7 6 1 6 8 5
1 1 7 8 3 2 3
9 4 0 7 6 4 1
5 8 3 2 4 8 3
7 4 8 4 8 3 4
`.trim().split('\n')

console.log(solution(input_data.map(el => el.split(' ').map(Number))))