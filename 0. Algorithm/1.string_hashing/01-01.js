function solution(s) {
  const array = [0, 0]
  s = s.split('').map(Number)

  let i = undefined
  for (let j of s) {
    if (i !== j) {
      array[j] += 1
      i = j
    }
  }
  return Math.min(...array)
}

const input_data = [
  '100001111',
  '10010111100',
  '0110010'
]

for (let data of input_data) {
  console.log(solution(data))
}