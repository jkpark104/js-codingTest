function solution(nums) {
  const ans = []
  const rMin = []
  const cMin = []

  for (let i = 0; i < nums.length; i++) {
    let rVal = 1e9
    let cVal = 1e9
    for (let j = 0; j < nums.length; j++) {
      rVal = Math.min(rVal, nums[i][j])
      cVal = Math.min(cVal, nums[j][i])
    }
    rMin.push(rVal)
    cMin.push(cVal)
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i][j] === Math.min(rMin[i], cMin[j])) {
        ans.push(nums[i][j])
      }
    }
  }
  return ans
}

const input_data = [
  [
    [4, 6, 22, 1],
    [9, 3, 10, 12],
    [30, 7, 20, 2],
    [15, 8, 5, 13],
  ]
]

for (let data of input_data) {
  console.log(solution(data))
}