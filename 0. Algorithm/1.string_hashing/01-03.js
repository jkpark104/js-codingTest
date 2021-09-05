'use strict'
function solution(s) {
  const array = []
  s = s.split('')

  array.push(s.join(''))
  while (s.length > 1) {
    s.shift()
    array.push(s.join(''))
  }
  return array.sort()
}

console.log(solution('kseaedu'))