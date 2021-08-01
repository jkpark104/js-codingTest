"use strict"

function solution(n, k) {
  const q = new Array(n).fill().map((el, idx) => idx + 1)

  let i = 1
  while (q.length !== 1) {
    const now = q.shift()
    if (i === k) {
      i = 1
    } else {
      i += 1
      q.push(now)
    }
  }
  return q[0]
}

const input_data = [
  [8, 3],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}