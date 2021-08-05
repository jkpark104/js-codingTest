'use strict'

function solution(nums) {
  const n = nums.length
  const chk = new Array(n).fill(0)

  const q = [0]
  chk[0] = 1
  while (q.length) {
    const now = q.shift()

    for (let i = 1; i < nums[now] + 1; i++) {
      const next = now + i
      if (0 <= next && next < n && !chk[next]) {
        // 탐색 범위는 nums 배열을 넘어가지 않아야 함
        chk[next] = chk[now] + 1
        q.push(next)
      }
    }
  }
  return chk[n - 1] - 1
}

console.log(solution([2, 2, 0, 2, 1, 1]))
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1]))
console.log(solution([5, 3, 1, 1, 2, 0, 0, 0]))