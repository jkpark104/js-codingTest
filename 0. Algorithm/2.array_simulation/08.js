"use strict"

function solution(nums) {
  // const ans = []
  let answer = 0
  const n = nums.length
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      const [x, y] = [a, b]
      // let maxVal = nums[x][y]
      let flag = true
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]
        // if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        //   maxVal = Math.max(maxVal, nums[nx][ny])
        // }
        if (0 <= nx && nx < n && 0 <= ny && ny < n && nums[nx][ny] > nums[x][y]) {
          flag = false
          break
        }
      }
      if (flag) answer += 1
      // if (nums[a][b] !== maxVal) {
      //   nums[a][b] = 0
      // }
    }
  }
  return answer
  // return nums.reduce((acc, cur) => {
  //   acc += cur.filter(x => x > 0).length
  //   return acc
  // }, 0)
  // 변수 카운팅해서 +=1로 해야됨 배열 탐색은 줄일 수록 좋음
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