"use strict"

function solution(s) {
  s = s.split('')
  const stack = []
  for (let str of s) {
    if (str === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(str)
    }
  }
  return stack.join('')
}

const input_data = [
  '(A(BC)D)EF(G(H)(IJ)K)LM(N)',
  '(A(BC))DE(AB)',
]

for (let data of input_data) {
  console.log(solution(data))
}