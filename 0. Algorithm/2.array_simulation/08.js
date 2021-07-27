function solution(nums) {
  const ans = []
  const n = nums.length
  dx = [1, 0, -1, 0, 0]
  dy = [0, 1, 0, -1, 0]

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      const [x, y] = [a, b]
      let maxVal = nums[x][y]
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          maxVal = Math.max(maxVal, nums[nx][ny])
        }
      }
      if (nums[a][b] !== maxVal) {
        nums[a][b] = 0
      }
    }
  }
  return nums.reduce((acc, cur) => {
    acc += cur.filter(x => x > 0).length
    return acc
  }, 0)
}

const input_data = [
  [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ]
]

for (let data of input_data) {
  console.log(solution(data))
}