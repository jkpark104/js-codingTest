function solution(s) {
  function dfs(r, nowIdx, target) {
    if (r === target) {
      // com 인덱스에는 지워야할 index 들어 있음
      const s_copy = [...s]
      for (let x of com) {
        s_copy[x] = ''
      }
      if (isValid(s_copy.join('').split(''))) {
        ans.push(s_copy.join(''))
        // isValid 함수로 괄호 삭제한 임시값이 올바른 괄호라면 ans 배열에 추가해줌
      }
    } else {
      for (let i = nowIdx; i < pos.length; i++) {
        com.push(pos[i])
        dfs(r + 1, i + 1, target)
        com.pop()
      }
    }
  }

  function isValid(s) {
    // 올바른 배열인지 판단해주는 함수
    let cnt = 0
    for (let str of s) {
      if (str === '(') {
        cnt += 1
      } else {
        cnt -= 1
        if (cnt < 0) return false
      }
    }
    return cnt === 0 ? true : false
  }
  s = s.split('')

  const n = s.length
  const pos = new Array(n).fill().map((el, idx) => idx)
  // index의 조합을 출력할 참조 배열
  const com = []
  let ans = []
  for (let i = 1; i < n - 1; i++) {
    // FOR 문은 1 개부터 n-2개까지 괄호를 지움
    ans = []
    dfs(0, 0, i)
    const val = Array.from(new Set(ans)).length
    // 올바른 괄호 중 중복되는 문자열을 제거한 후 개수를 저장함
    if (val > 0) return val
    // 올바른 괄호 개수가 하나라도 있다면 val 리턴 해줌
  }
  return 0
  // 1개부터 n-2개까지 괄호를 지워도 올바른 괄호가 되지 않으면 0을 리턴함
}