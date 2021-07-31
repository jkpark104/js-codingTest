"use strict"

function solution(s, e) {
  function bfs() {
    const q = [s]

    while (q.length) {
      const now = q.shift()

      if (now === e) return chk[now]

      for (let next of [now - 1, now + 1, now + 5]) {
        if (next <= 10001 && !chk[next]) {
          chk[next] = chk[now] + 1
          q.push(next)
        }
      }
    }
  }
  const chk = new Array(10001).fill(0)
  return bfs()
}

console.log(solution(5, 14))
console.log(solution(8, 3))