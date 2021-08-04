'use strict'

function solution(matrix, target) {
  function binarySearch(target) {
    let row = 0
    let col = m - 1

    while (row < n && col >= 0) {
      if (matrix[row][col] === target) return [row, col]
      if (target < matrix[row][col]) col -= 1
      else row += 1
    }
  }
  const n = matrix.length
  const m = matrix[0].length
  return binarySearch(target)
}

console.log(solution([
  [1, 6, 9, 12],
  [3, 7, 10, 14],
  [5, 8, 13, 17],
  [15, 18, 20, 23]
], 8))