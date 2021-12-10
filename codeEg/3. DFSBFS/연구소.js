const input_data = `
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
`.trim().split('\n')

const area = []

for (let i of input_data) {
  area.push(i.split(' ').map(Number))
}

const n = area.length
const m = area[0].length

const virus = []
const zeros = []

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (area[i][j] === 0) {
      zeros.push([i, j])
    } else if (area[i][j] === 2) {
      virus.push([i, j])
    }
  }
}

const safety_zone = zeros.length
const res = []
const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1]
backTracking(3)
console.log(res.reduce((acc, val) => Math.max(acc, val)))

function backTracking(res) {
  if (res === 0) {
    spreadVirus()
    return
  }
  for (let [zx, zy] of zeros) {
    if (area[zx][zy] === 0) {
      area[zx][zy] = 1
      backTracking(res - 1)
      area[zx][zy] = 0
    }
  }
}

function spreadVirus() {
  let infected = 0
  const q = []
  
  const area_copy = []
  for (let el of area) {
    area_copy.push([...el])
  }

  for (let[vx, vy] of virus) {
    q.push([vx, vy])

    while (q.length !== 0) {
      const [x, y] = q.shift()

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]

        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (area_copy[nx][ny] === 0) {
            area_copy[nx][ny] = 2
            infected += 1
            q.push([nx, ny])
          }
        }
      }
    }
  }
  res.push(safety_zone - infected - 3)
}