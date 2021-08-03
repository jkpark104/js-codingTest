"use strict"

function solution(s, e) {
  function bfs() {
    const q = [s]
    while (q.length) {
      const now = q.shift()

      if (now === e) return chk[now]

      for (let next of [now - 1, now + 1, now + 5]) {
        if (next >=0 &&   next < 10001 && !chk[next]) {
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

// function solution(s, e) {
//   function bfs() {
//     const q = [s]
//     chk[s] = 1
//     let L = 0
//     while (q.length) {
//       const len = q.length
//       for (let i = 0; i < len; i++) {
//         const x = q.shift()
//         for (let nx of [x - 1, x + 1, x + 5]) {
//           if (nx > 0 && nx < 10001 && !chk[nx]) {
//             if (nx === e) return L + 1
//             chk[nx] = 1
//             q.push(nx)
//           }
//         }
//       }
//       L += 1
//     }
//   }
//   const chk = new Array(10001).fill(0)
//   return bfs()
// }