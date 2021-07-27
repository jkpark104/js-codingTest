function solution(s) {

  s = s.split('')
  const len = s.length
  for (let i = 0; i < len; i++) {
    s_copy = [...s]
    s_copy.splice(i, 1)
    
    if (s_copy.join('') === s_copy.reverse().join('')) {
      return 'YES'
    }
  }

  return 'NO'
}

const input_data = [
  'abcbdcba',
  'abcabbakcba',
  'abcacbakcba',
  'bab',
]

for (let data of input_data) {
  console.log(solution(data))
}
