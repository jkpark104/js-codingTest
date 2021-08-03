function solution(p) {
  function dfs(p) {
    if (!p.length) return p
    const isValid = p[0] === '(' ? true : false
    let u
    let v
    let flag = true
    let start
    let end
    let cnt = 0
    for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') {
        if (cnt === -1) {
          end = i
          break
        }
        cnt += 1
      } else {
        cnt -= 1
        if (cnt === -1) {
          flag = false
          start = i
        }
      }
    }
    if (isValid) {
      u = p.slice(0, start)
      v = p.slice(start, p.length)
    } else {
      u = p.slice(0, end + 1)
      v = p.slice(end + 1, p.length)
    }

    if (!isValid) {
      u.pop()
      u.shift()
      for (let i = 0; i < u.length; i++) {
        if (u[i] === '(') u[i] = ')'
        else u[i] = '('
      }
      return ['('].concat(dfs(v)).concat([')']).concat(u)
    } else if (!flag) {
      return dfs(u).concat(dfs(v))
    } else {
      return p
    }
  }
  return dfs(p.split('')).join('')
}

console.log(solution("(()())()"))
console.log(solution(")("))
console.log(solution("()))((()"))
console.log(solution(")((())"))
console.log(solution(")()("))
