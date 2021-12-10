function solution(s) {
  let answer = s.length

  for (let step = 1; step < parseInt(s.length / 2) + 1; step++) {
    let compressed = ''
    let cnt = 1
    let prev = s.slice(0, step)
    for (let i = step; i < s.length; i += step) {
      if (prev === s.slice(i, i + step)) {
        cnt += 1
      } else {
        compressed += cnt > 1 ? cnt.toString() + prev : prev
        prev = s.slice(i, i + step)
        cnt = 1
      }
    }
    compressed += cnt > 1 ? cnt.toString() + prev : prev
    answer = Math.min(answer, compressed.length)
  }
  return answer
}