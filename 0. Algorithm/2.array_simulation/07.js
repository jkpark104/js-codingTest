function solution(nums) {
  const ans = []
  n = nums.length

  const r = []
  const c = []

  for (let i of nums) {
    r.push(Math.min(...i))
  }

  for (let i = 0; i < n; i++) {
    let minVal = 1e9
    for (let j = 0; j < n; j++) {
      minVal = Math.min(minVal, nums[j][i])
    }
    c.push(minVal)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i][j] === Math.min(r[i], c[j])) {
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