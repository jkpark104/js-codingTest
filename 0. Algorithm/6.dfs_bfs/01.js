"use strict"

function solution(n) {
  return dfs(n, [])
}

console.log(solution(11))

function dfs(n, array) {
  if (n == 1) {
    array.push(n)
    return array.reverse().join('')
  }
  array.push(n % 2)
  return dfs(parseInt(n / 2), array)
}