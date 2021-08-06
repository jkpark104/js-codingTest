"use strict"

// function solution(meeting) {
//   meeting.sort((a, b) => b[1] - a[1] || b[0] - a[0])

//   let ans = 1
//   let end = meeting[0][1]
//   let start = meeting[0][0]

//   for (let i = 1; i < meeting.length; i++) {
//     if (meeting[i][1] <= start) {
//       ans += 1
//       end = meeting[i][1]
//       start = meeting[i][0]
//     }
//   }
//   return ans
// }

console.log(solution([
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]))
console.log(solution([
  [3, 3],
  [1, 3],
  [2, 3],
]))

function solution(meeting) {
  const n = meeting.length
  meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0])

  let cnt = 1
  let prev_start = meeting[meeting.length - 1][0]
  for (let i = n - 2; i > -1; i--) {
    if (meeting[i][1] <= prev_start) {
      cnt += 1
      prev_start = meeting[i][0]
    }
  }
  return cnt
}