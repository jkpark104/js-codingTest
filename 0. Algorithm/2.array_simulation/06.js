// function solution(nums) {
//   const res = []
//   nums.forEach((element, idx) => {
//     res.push([element.filter(x => x === 1).length, idx])
//   })
//   res.sort((a, b) => a[0] - b[0] || a[1] - b[1])

//   const ans = []
//   for (let r of res) {
//     ans.push(r[1])
//   }
//   return ans
// }

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

function solution(nums) {
  let answer = nums.map((row, i) => ({
    i,
    cnt: row.reduce((acc, cur) => {
      return acc + cur
    })
  })).sort((a, b) => a.cnt - b.cnt).map(el => el.i)
  return answer
}