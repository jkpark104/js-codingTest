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
        // 두자리 숫자일 때
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
      // 닫는 괄호일 때 스택 괄호 연산 수행
      // 1. 스택이 비어있을 때 ans 변수에 문자열 더해줌
      // 2. 비어있지 않을 때 다시 스택에 넣어줌
    } else if (s[i] === '(') {
      if (i === 0 || isNaN(s[i-1])) repeatNum.push(1)
      // 괄호 앞에 숫자가 없을 때 숫자 1을 넣어줌
      stack.push(s[i])
    } else {
      if (stack.length === 0) ans += s[i]
      else stack.push(s[i])
    }
  }
  return ans
}