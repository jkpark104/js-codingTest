function solution(nums, m) {
  let answer = 0;

  function dfs(L, s, t) {
    if (L === nums.length) {
      if (t <= m) answer = Math.max(answer, s)
    } else {
      dfs(L + 1, s + nums[L][0], t + nums[L][1])
      dfs(L + 1, s, t)
    }
  }
  dfs(0, 0, 0);
  return answer;
}

console.log(solution([
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4]
], 20))
console.log(solution([
  [15, 6],
  [30, 11],
  [23, 8],
  [14, 4],
  [10, 3],
  [20, 7]
], 25))