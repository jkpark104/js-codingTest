"use strict"

// 콤비네이션 안 부르고 이항 계수 만들어서 풀어보기
function solution(N, F) {
  function dfs(k) {
    if (flag) return
    if (k === N) {
      let biCo = 1
      let val = selected[0]
      for (let i = 1; i < N; i++) {
        biCo = biCo * (N - i) / i
        val += selected[i] * biCo
      }
      if (val === F) {
        flag = true
        ans = selected.slice()
      }
    } else {
      for (let i = 1; i < N + 1; i++) {
        if (!chk[i]) {
          selected.push(i)
          chk[i] = 1
          dfs(k + 1)
          selected.pop()
          chk[i] = 0
        }
      }
    }
  }
  const selected = []
  let ans = undefined
  const chk = new Array(N + 1).fill(0)
  let flag = false
  dfs(0)
  return ans
}

console.log(solution(4, 16))
console.log(solution(5, 50))