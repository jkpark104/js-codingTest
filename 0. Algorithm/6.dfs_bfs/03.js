"use strict"

// function solution(n) {
//   const ans = []

//   function dfs(k, selected) {
//     ans.push(selected)
//     for (let i = selected[k] + 1; i < n + 1; i++) {
//       dfs(k + 1, [...selected, i])
//     }
//   }

//   for (let i = 1; i < n + 1; i++) {
//     dfs(0, [i])
//   }
//   return ans
// }

console.log(solution(3))

function solution(n) {
  let answer = [];
  let part = [];

  function DFS(L) {
    if (L === n + 1) {
      if (part.length !== 0) answer.push(part.slice());
    } else {
      part.push(L);
      DFS(L + 1);
      part.pop();
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}