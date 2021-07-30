"use strict"

// function solution(meeting) {
//   const timeTable = new Array(24).fill(0)
//   meeting.sort((a, b) => ((a[1] - a[0]) - (b[1] - b[0])))

//   let ans = 0
//   for (let [start, end] of meeting) {
//     if (timeTable.slice(start, end).reduce((acc, cur) => acc + cur) === 0) {
//       ans += 1
//       for (let i = start; i < end; i++) {
//         timeTable[i] = 1
//       }
//     }
//   }
//   return ans
// }

// 틀림

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
  meeting.sort((a, b) => (b[1] - a[1]) || (b[0] - a[0]))

  let ans = 1

  let [start, end] = meeting[0]
  for (let i = 1; i < meeting.length; i++) {
    const [left, right] = meeting[i]

    if (right <= start) {
      ans += 1
      end = right
      start = left
    }
  }
  return ans
}