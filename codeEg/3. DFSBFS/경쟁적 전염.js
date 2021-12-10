function sol(q) {

  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]

  q_copy = []
  while (q.length !== 0) {
    const [now, x, y] = q.shift()

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if ((0 <= nx && nx < n) && (0 <= ny && ny < n) && !(data[nx][ny])) {
        data[nx][ny] = now
        q_copy.push([now, nx, ny])
      }
    }
  }
  return q_copy
}

const [n, k] = [3, 3]

const input_data = `
1 0 2
0 0 0
3 0 0
`.trim().split('\n')

const [s, x, y] = [1, 2, 2]

const data = []
let virus = []
for (let i = 0; i < n; i++) {
  const tmp = input_data[i].split(' ').map(Number)
  for (let j = 0; j < n; j++) {
    if (tmp[j]) virus.push([tmp[j], i, j])
  }
  data.push(tmp)
}
virus.sort((a, b) => a[0] - b[0])

for (let i = 0; i < s; i++) {
  virus = sol(virus)
}

console.log(data[x - 1][y - 1])