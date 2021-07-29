"use strict"

function solution(n, k) {
  // const q = []
  // for (let i = 1; i < n + 1; i++) {
  //   q.push(i)
  // }
  // const q = new Array(n).fill().map((el, idx) => idx + 1)
  const q = Array.from({length: n}, (v, i) => i + 1)
  // let idx = 1
  while (q.length !== 1) {
    // if (idx === k) {
    //   q.shift()
    //   idx = 0
    // } else {
    //   q.push(q.shift())
    // }
    // idx += 1
    for (let i = k; i > 1; i--) {
      q.push(q.shift())
    }
    q.shift()
  }

  return q[0]
}

const input_data = [
  [8, 3],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}