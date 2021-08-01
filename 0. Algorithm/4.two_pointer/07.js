"use strict"

function solution(s, t) {
  const n = s.length
  const m = t.length

  const hash = new Map()
  for (let str of t) {
    hash.set(str, hash.get(str) - 1 || -1)
  }

  for (let i = 0; i < m - 1; i++) {
    if (hash.get(s[i]) === -1) hash.delete(s[i])
    else hash.set(s[i], (hash.get(s[i]) + 1 || 1))
  }

  let ans = 0
  let j = m - 1
  for (let i = 0; i < n; i++) {
    while (j < n && (j - i) < m) {
      if (hash.get(s[j]) === -1) hash.delete(s[j])
      else hash.set(s[j], (hash.get(s[j]) + 1 || 1))
      j += 1
    }
    if (hash.size === 0) ans += 1
    if (hash.get(s[i]) === 1) hash.delete(s[i])
    else hash.set(s[i], (hash.get(s[i]) - 1 || -1))
  }
  return ans
}

const input_data = [
  ['bacacbcba', 'abc'],
  ['bacaAacba', 'abc'],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}