"use strict"

function solution(s) {
  const stack = []
  for (let str of s) {
    if (!isNaN(str)) stack.push(Number(str))
    else {
      const [y, x] = [stack.pop(), stack.pop()]
      if (str === '+') stack.push(x + y)
      if (str === '-') stack.push(x - y)
      if (str === '*') stack.push(x * y)
      if (str === '/') stack.push(x / y)
    }
  }
  return stack[0]
}

const input_data = [
  '352+*9-',
  '232*+63-4*+',
]

for (let data of input_data) {
  console.log(solution(data))
}

// 이진트리 [null, 1, 2, 3, 4, 5, 6 ,7]
// 전위 : 부 -> L -> R ; 1 2 4 5 3 6 7
// 중위 : L -> 부 -> R ; 4 2 5 1 6 3 7
// 후위 : L -> R -> 부 ; 4 5 2 6 7 3 1

