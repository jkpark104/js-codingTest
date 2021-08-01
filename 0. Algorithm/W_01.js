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