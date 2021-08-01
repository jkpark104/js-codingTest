function solution(s) {
  const n = s.length
  let ans = ''
  const repeatNum = []
  let stack = []
  for (let i = 0; i < n; i++) {
    if (!isNaN(s[i])) {
      let num = s[i]
      if (!isNaN(s[i+1])) {
        num += s[i+1]
        i ++
      }
      repeatNum.push(Number(num))
    } else if (s[i] === ')') {
      const rep = repeatNum.pop()
      let tmp = []
      while (stack[stack.length - 1] !== '(') {
        tmp.push(stack.pop())
      }
      stack.pop()
      if (stack.length === 0) ans += tmp.reverse().join('').repeat(rep)
      else stack.push(tmp.reverse().join('').repeat(rep))
    } else if (s[i] === '(') {
      if (i === 0 || isNaN(s[i-1])) repeatNum.push(1)
      stack.push(s[i])
    } else {
      if (stack.length === 0) ans += s[i]
      else stack.push(s[i])
    }
  }
  return ans === '' ? s : ans
}