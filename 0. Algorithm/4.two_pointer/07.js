"use strict"

// function solution(s, t) {
//   let ans = 0
//   const nH = new Map()

//   const n = s.length
//   const m = t.length

//   for (let el of t) {
//     if (!nH.get(el)) {
//       nH.set(el, -1)
//     } else {
//       nH.set(el, nH.get(el) - 1)
//     }
//   }

//   let end = 0
//   for (let start = 0; start < n; start++) {
//     while (end < n && (end - start) < m) {
//       const next = nH.get(s[end])
//       if (next === undefined) nH.set(s[end], 1)
//       else if (next === -1) nH.set(s[end], 0)
//       else nH.set(s[end], nH.get(s[end]) + 1)
//       if (!nH.get(s[end])) nH.delete(s[end])
//       end += 1
//     }
//     if (!nH.size) ans +=1
//     if(!nH.get(s[start])) nH.set(s[start], -1)
//     else nH.set(s[start], nH.get(s[start]) - 1)
//     if (!nH.get(s[start])) nH.delete(s[start])
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
  const n = s.length
  const m = t.length

  const hash = new Map()
  for (let str of t) {
    hash.set(str, hash.get(str) - 1 || -1)
  }

  for (let i = 0; i < m - 1; i++) {
    if (hash.get(s[i]) === -1) hash.delete(s[i])
    else {
      hash.set(s[i], hash.get(s[i]) + 1 || 1)
    }
  }

  let end = m - 1
  let ans = 0
  for (let start = 0; start < n; start++) {
    while (end < n && (end - start) < m) {
      if (hash.get(s[end]) === -1) hash.delete(s[end])
      else {
        hash.set(s[end], hash.get(s[end]) + 1 || 1)
      }
      end += 1
    }
    if (!hash.size) ans += 1
    if (hash.get(s[start]) === 1) hash.delete(s[start])
    else {
      hash.set(s[start], hash.get(s[start]) - 1 || -1)
    }
  }
  return ans
}