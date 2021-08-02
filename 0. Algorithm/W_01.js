function solution(s) {
  const hash = new Map()
  for (let str of s) {
    hash.set(str, hash.get(str) + 1 || 1)
  }
  const res = Array.from(hash.entries())
  res.sort((a,b)=>(b[1]-a[1]||a[0].charCodeAt() - b[0].charCodeAt()))
  
  let ans = ''
  for (let [str, num] of res) {
    while (num > 0) {
      ans += str
      num -= 1
    }
  }
  return ans
}

// 정렬
const sort_func = (a, b) => {
  if (a.charCodeAt() >= 97 && b.charCodeAt() >= 97) return 0
  else if (a.charCodeAt() < 97 && b.charCodeAt() >= 97) return 1
  else if (a.charCodeAt() >= 97 && b.charCodeAt() < 97) return -1
  else return 0
}

const str = 'aAcdCbB'.split('')
console.log('A'.charAt())
console.log(str.sort((a, b) => sort_func(a, b) || a.charCodeAt() - b.charCodeAt()))