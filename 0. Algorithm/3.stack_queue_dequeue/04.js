"use strict"

function solution(s) {
  s = s.split('')
  const stack = []

  for (let str of s) {
    if (stack[stack.length - 1] === str) {
      stack.pop()
    } else {
      stack.push(str)
    }
  }
  return stack.join('')
}

const input_data = [
  'acbbcaa',
  'bacccaba',
]

for (let data of input_data) {
  console.log(solution(data))
}