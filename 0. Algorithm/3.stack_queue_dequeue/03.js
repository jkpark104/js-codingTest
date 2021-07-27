"use strict"

function solution(s) {
  s = s.split('')
  const stack = []
  for (let str of s) {
    if (str === '+') {
      const y = stack.pop()
      const x = stack.pop()
      stack.push(x + y)
    } else if (str === '-') {
      const y = stack.pop()
      const x = stack.pop()
      stack.push(x - y)
    } else if (str === '*') {
      const y = stack.pop()
      const x = stack.pop()
      stack.push(x * y)
    } else if (str === '/') {
      const y = stack.pop()
      const x = stack.pop()
      stack.push(x / y)
    } else {
      stack.push(new Number(str))
    }
  }
  return stack[0]
}

const input_data = [
  '352+*9-',
]

for (let data of input_data) {
  console.log(solution(data))
}