"use strict"

function solution(s) {
  s = s.split('')

  const stack = []
  for (let str of s) {
    if (str === '(') {
      stack.push(1)
    } else {
      if (!stack.length) return 'NO'
      stack.pop()
    }
  }
  return !stack.length ? 'YES' : 'NO'
}

const input_data = [
  '(()(()))(()',
  '()()',
  '(())()',
  ')()(',
  '(()(',
]

for (let data of input_data) {
  console.log(solution(data))
}