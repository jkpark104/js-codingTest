"use strict"

function solution(need, plan) {
  const q = []
  for (let n of need) q.push(n)

  for (let p of plan) {
    if (p === q[0]) {
      q.shift()
    }
  }
  return !q.length ? 'YES' : 'NO'
}

const input_data = [
  ['CBA', 'CBDAGE'],
  ['CBA', 'CBDBAGE'],
  ['CBA', 'CGEADB'],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}