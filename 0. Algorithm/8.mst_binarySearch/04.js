function solution(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  let row = 0;
  let col = m - 1;
  while (row < n && col >= 0) {
    if (matrix[row][col] === target) return [row, col];
    if (matrix[row][col] > target) col -= 1;
    else row += 1;
  }
  return -1;
}

console.log(
  solution(
    [
      [1, 6, 9, 12],
      [3, 7, 10, 14],
      [5, 8, 13, 17],
      [15, 18, 20, 23]
    ],
    8
  )
);
