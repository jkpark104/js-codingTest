"use strict"

function solution(n) {
  function dfs(k, s) {
    if (k === m) {
      const val = Number(tmp.join(''))
      if (val > n) ans = Math.min(val, ans)
      // n보다 큰 값만 비교 후 최솟값 구함
    } else {
      for (let i = 0; i < m; i++) {
        if (!chk[i]) {
          chk[i] = 1
          tmp.push(arr[i])
          dfs(k + 1, s + 1)
          chk[i] = 0
          tmp.pop()
        }
      }
    }
  }
  const tmp = []
  const arr = n.toString().split('').map(Number)
  const m = arr.length
  const chk = new Array(m + 1).fill(0)
  let ans = Number.MAX_SAFE_INTEGER
  dfs(0, 0)

  return ans !== Number.MAX_SAFE_INTEGER ? ans : -1
}

console.log(solution(123))
console.log(solution(321))
console.log(solution(20573))
console.log(solution(9990))
console.log(solution(156)); //165
console.log(solution(330)); //-1
console.log(solution(27711)); //71127
console.log(solution(54312)); //54321
console.log(solution(765423)); //765432
console.log(solution(33051)); //33105
console.log(solution(6543721)); //6547123
console.log(solution(3902830)); //3903028
console.log(solution(54321)); //-1
console.log(solution(54300)); //-1