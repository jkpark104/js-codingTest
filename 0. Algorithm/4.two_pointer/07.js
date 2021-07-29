"use strict"

// function solution(s, t) {
//   const sH = {}
//   for (let i of t) {
//     sH[i] = sH[i] + 1 || 1
//   }
//   let end = 0
//   let ans = 0
//   const sH2 = {}
//   for (let start = 0; start < s.length - (t.length - 1); start++) {
//     while (end < s.length && end - start < t.length) {
//       sH2[s[end]] = sH2[s[end]] + 1 || 1
//       end += 1
//     }
//     if (Object.entries(sH).sort().toString() === Object.entries(sH2).sort().toString()) ans += 1
//     sH2[s[start]] -= 1
//     if (!sH2[s[start]]) delete sH2[s[start]]
//   }
//   return ans
// }
const input_data = [
  ['bacacbcba', 'abc'],
  ['bacaAacba', 'abc'],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}

function solution(s, t) {
  let ans = 0
  const nH = new Map()

  const n = s.length
  const m = t.length

  for (let el of t) {
    if (!nH.get(el)) {
      nH.set(el, -1)
    } else {
      nH.set(el, nH.get(el) - 1)
    }
  }

  let end = 0
  for (let start = 0; start < n; start++) {
    while (end < n && (end - start) < m) {
      const next = nH.get(s[end])
      if (next === undefined) nH.set(s[end], 1)
      else if (next === -1) nH.set(s[end], 0)
      else nH.set(s[end], nH.get(s[end]) + 1)
      if (!nH.get(s[end])) nH.delete(s[end])
      end += 1
    }
    if (!nH.size) ans +=1
    if(!nH.get(s[start])) nH.set(s[start], -1)
    else nH.set(s[start], nH.get(s[start]) - 1)
    if (!nH.get(s[start])) nH.delete(s[start])
  }
  return ans
}