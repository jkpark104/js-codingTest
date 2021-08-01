function solution(n) {
  let ans = 0
  let cnt = 1
  n -= cnt
  while (n > 0) {
    cnt += 1
    n -= cnt
    if (!(n % cnt)) ans += 1
  }
  return ans
}

const input_data = [
  15,
  45678,
  98765,
  7,
]

for (let data of input_data) {
  console.log(solution(data))
}