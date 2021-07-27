function solution(nums) {
  const res = []
  nums.forEach((element, idx) => {
    res.push([element.filter(x => x === 1).length, idx])
  })
  res.sort((a, b) => a[0] - b[0] || a[1] - b[1])

  const ans = []
  for (let r of res) {
    ans.push(r[1])
  }
  return ans
}

const input_data = [
  [
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
  ],
]

for (let data of input_data) {
  console.log(solution(data))
}