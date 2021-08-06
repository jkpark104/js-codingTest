// function solution(words) {
//   const sample = words.sort((a, b) => b.length - a.length)
//   const ans = []

//   for (let i = 0; i < sample[0].length; i++) {
//     let cnt = false
//     for (let j = 1; j < sample.length; j++) {
//       if (sample[0][i] === sample[j][i]) {
//         ans.push(sample[0][i])
//         cnt = true
//         break
//       }
//     }
//     if (!cnt) {
//       ans.push(sample[0][i])
//       return ans.length
//     }
//   }
// }

const input_data = [
  ["seeasue", "sesseysu", "semeas"],
  ["ackky", "kabck", "yokkcs"],
  ["longlong", "longtong", "longbig"],
  ["ab", "abc"],
  ["aa", "aaab", "aaac"],
]

for (let data of input_data) {
  console.log(solution(data))
}

// function solution(words) {
//   let answer, i
//   let sH = new Map()
//   for (i = 0; i < words[0].length; i++) {
//     let flag = true
//     for (let j = 0; j < words.length; j++) {
//       let x = words[j].substring(0, i + 1)
//       if (sH.has(x)) {
//         flag = false
//         break
//       }
//       sH.set(x, 1)
//     }
//     if (flag) {
//       break
//     }
//   }
//   answer = i + 1
//   return answer
// }
// 틀린 코드

function solution(words) {
  words.sort((a, b) => (b.length - a.length))
  const n = words[0].length

  let ans = 0
  for (let j = 0; j < n; j++) {
    const chunk = words[0].substring(0, j + 1)
    let flag = false
    for (let i = 1; i < words.length; i++) {
      if (chunk === words[i].substring(0, j + 1)) {
        flag = true
        break
      }
    }
    ans += 1
    if (!flag) return ans
  }
}
