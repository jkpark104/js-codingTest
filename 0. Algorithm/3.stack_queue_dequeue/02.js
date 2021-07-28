"use strict"

// function solution(s) {
//   s = s.split('')
//   let ans = ''
//   const stack = []
//   for (let str of s) {
//     if (str === '(') {
//       stack.push(1)
//     } else if (str === ')') {
//       stack.pop()
//     } else if (!stack.length) {
//       ans += str
//     }
//   }
//   return ans
// }

const input_data = [
  '(A(BC)D)EF(G(H)(IJ)K)LM(N)',
  '(A(BC))DE(AB)',
]

for (let data of input_data) {
  console.log(solution(data))
}

function solution(s) {
  s = s.split('')
  const stack = []
  for (let str of s) {
    if (str === '(') {
      stack.push('(')
    } else if (str === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(str)
    }
  }
  return stack.join('')
}