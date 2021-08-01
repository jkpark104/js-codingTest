function solution(nums) {
  return nums.map((row, i) => ({
    i,
    cnt: row.reduce((acc, cur) => acc + cur)
  })).sort((a, b) => a.cnt - b.cnt).map(el=>el.i)
}

const input_data = [
  [
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
  ],
]

for (let data of input_data) {
  console.log(solution(data))
}
