"use strict"

function rotate(data) {
  const n = data.length
  const m = data[0].length
  const res = new Array(m).fill().map(() => new Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[j][i] = data[n - 1 - i][j]
    }
  }
  return res
}

function solution(key, lock) {
  const n = key.length
  const m = lock.length
  const hole = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (lock[i][j] === 0) hole.push([i, j])
    }
  }
  if (!hole.length) return true

  let repeat = 4
  while (repeat > 0) {
    const home = []
    key = rotate(key)
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (key[i][j] === 1) home.push([i, j])
      }
    }

    for (let [x, y] of home) {
      for (let [i, j] of hole) {
        const [dx, dy] = [-x + i, -y + j]
        const arrangedHome = home.map((el) => [el[0] + dx, el[1] + dy])

        let match = 0
        let cnt = 0
        for (let [ax, ay] of arrangedHome) {
          if (0 <= ax && ax < m && 0 <= ay && ay < m) {
            if (lock[ax][ay] === 0) {
              cnt += 1
              match += 1
            }
          } else cnt += 1
        }
        if (cnt === home.length && match === hole.length) return true
      }
    }
    repeat -= 1
  }
  return false
}


console.log(solution([
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1]
], [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]))