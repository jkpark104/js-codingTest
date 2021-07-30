"use strict"

function solution(num, m) {
  num = num.reverse()
  let ans = 0

  let idx = 0
  while (m) {
    ans += parseInt(m / num[idx])
    m = m % num[idx]
    idx += 1
  }
  return ans
}

console.log(solution([1, 5, 10], 15))