function solution(nums, d, k) {
  function dfs(L, s, sum) {
    if (L === k) {
      ans = Math.max(ans, students.filter(x => x === (x & sum)).length)
    } else {
      for (let i = s; i < d + 1; i++) {
        dfs(L + 1, i + 1, sum + (1 << (i - 1)))
      }
    }
  }

  const students = []
  for (let num of nums) {
    let val = 0
    for (let i = 0; i < num.length; i++) {
      val += 1 << (num[i] - 1)
    }
    students.push(val)
  }
  let ans = 0
  dfs(0, 1, 0)

  return ans
}

// 비트 연산
// 매개변수에 비트 합 미리 구해 놓기

console.log(solution(
  [
    [1],
    [2, 3],
    [3],
    [1, 2],
    [],
    [2, 1],
    [2, 3, 4],
    [3, 4],
  ], 4, 3
))