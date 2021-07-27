function solution(s) {
  // const dict = {}
  const dict = new Map()
  let ans = [0, 0]
  for (let i of s) {
    // dict[i] = dict[i] + 1 || 1
    dict.set(i, dict.get(i) + 1 || 1)
    // 단축 평가 논리 계산법
    // if (dict[i] > ans[1]) {
    //   ans[0] = i
    //   ans[1] = dict[i]
    // }
    for (let [key, val] of dict) {
      if (val > ans[1]) {
        ans[1] = val
        ans[0] = key
      }
    }
  }
  return ans[0]
}

const input_data = [
  'BACBACCACCBDEDE',
]

for (let data of input_data) {
  console.log(solution(data))
}


// function solution(s) {
//   const dict = {}
//   const ans = [undefined, 0]
//   for (let i of s) {
//     if (dict[i] !== undefined) {
//       dict[i] += 1
//     } else {
//       dict[i] = 1
//     }
//     if (dict[i] > ans[1]) {
//       ans[0] = i
//       ans[1] = dict[i]
//     }  
//   }
//   return ans[0]
// }

// const input_data = [
//   'BACBACCACCBDEDE',
// ]

// for (let data of input_data) {
//   console.log(solution(data))
// }
