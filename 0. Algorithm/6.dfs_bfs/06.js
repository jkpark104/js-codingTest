// function solution(nums, m) {
//   function dfs(L, s, m) {
//     if (L === s) {
//       console.log(s);
//     } else {
//       dfs(L + 1, s + nums[L], m);
//       dfs(L + 1, nums[L], m);
//     }
//   }
//   dfs(0, 0, m);
// }

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

// function solution(nums, m) {
//   function dfs(k, time, score) {
//     if (k === n) {
//       if (time <= m) ans = Math.max(ans, score)
//     } else {
//       dfs(k + 1, time + nums[k][1], score + nums[k][0])
//       dfs(k + 1, time, score)
//     }
//   }
//   const n = nums.length
//   let ans = 0
//   dfs(0, 0, 0)
//   return ans
// }