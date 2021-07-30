// function solution(n) {
//   const target = n
//   n = Math.ceil(n / 2)

//   let intervalSum = 0
//   let end = 1
//   let ans = 0
//   for (let start = 1; start < n + 1; start++) {
//     while (end < n + 1 && intervalSum < target) {
//       intervalSum += end
//       end += 1
//     }
//     if (intervalSum === target) {
//       ans += 1
//     }
//     intervalSum -= start
//   }
//   return ans
// }

const input_data = [
  15,
  45678,
  98765,
  7,
]

for (let data of input_data) {
  console.log(solution(data))
}

// function solution(n) {
//   let answer = 0
//   let cnt = 1
//   n -= 1
//   while (n > 0) {
//     cnt += 1
//     n -= cnt
//     if (n % cnt === 0) {
//       answer += 1
//       console.log(n, cnt)
//     }
//   }
//   return answer
// }

function solution(n) {
  let ans = 0

  let cnt = 1
  n -= 1
  while (n > 0) {
    cnt += 1
    n -= cnt
    if (n % cnt === 0) {
      ans += 1
    }
  }
  return ans
}