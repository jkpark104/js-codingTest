function solution(nums) {
  const ans = []
  n = nums.length

  const r = []
  const c = []


  for (let i = 0; i < n; i++) {
    let minValc = 1e9
    let minValr = 1e9
    for (let j = 0; j < n; j++) {
      minValc = Math.min(minValc, nums[j][i])
      minValr = Math.min(minValr, nums[i][j])
    }
    c.push(minValc)
    r.push(minValr)
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