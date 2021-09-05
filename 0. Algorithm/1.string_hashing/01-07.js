// function solution(s1, s2) {
//   s1 = s1.split('').sort()
//   s2 = s2.split('').sort()

const { shuffle, has } = require("lodash")

//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) return 'NO'
//   }
//   return 'YES'
// }

const input_data = [
  ['AbaAeCe', 'baeeACA'],
  ['abaCC', 'Caaab'],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}

// function solution(s1, s2) {
//   if (s1.length !== s2.length) return 'NO'

//   s1 = s1.split('').sort()
//   s2 = s2.split('').sort()
//   const sH = new Map()

//   for (let i of s1) {
//     sH.set(i, sH.get(i) + 1 || 1)
//   }

//   for (let x of s2) {
//     console.log(sH)
//     if (!sH.has(x) || sH.get(x) === 0) {
//       return 'NO'
//     } else {
//       sH.set(x, sH.get(x) - 1)
//     }
//   }
//   console.log(sH)
//   return 'YES'
// }

function solution(s1, s2) {
  const hash = new Map()
  for (let s of s1) {
    hash.set(s, hash.get(s) + 1 || 1)
  }
  
  for (let x of s2) {
    if (!hash.has(x) || !hash.get(x)) {
      return 'NO'
    } else {
      hash.set(x, hash.get(x) - 1)
    }
  }
  return 'YES'
} 