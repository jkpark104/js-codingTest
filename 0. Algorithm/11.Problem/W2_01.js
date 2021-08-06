function solution(words) {
  words.sort((a, b) => (a.length - b.length))
  const n = words[0].length
  // 접두어 => 공통된 문자 중 제일 짧은 문자이므로 제일 짧은 문자열을 sample로 지정함

  let len = 0
  let chunk = undefined
  for (let j = 0; j < n; j++) {
    chunk = words[0].substring(0, j + 1)
    // Sample을 계속 substring 함
    let flag = false
    for (let i = 1; i < words.length; i++) {
      if (chunk !== words[i].substring(0, j + 1)) {
        flag = true
        break
        // 같지 않으면 지금까지의 샘플의 서브스트링 문자열이 접두어가 됨
      }
    }
    if (flag) return chunk.slice(0, len)
    // 최종 서브스트링 출력
    len += 1
  }
  return chunk
}