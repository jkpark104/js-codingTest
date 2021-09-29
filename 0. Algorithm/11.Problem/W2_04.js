function solution(S) {
  const stack = [];
  let res = [];
  const data = S.split('');

  function isValid(str) {
    let cnt = 0;
    for (const s of str) {
      if (s === '(') cnt += 1;
      else cnt -= 1;
      if (cnt < 0) return false;
    }
    return cnt === 0;
  }

  function com(L, s, numb) {
    if (L === numb) {
      const sample = data.filter((_, idx) => !stack.includes(idx)).join('');
      if (isValid(sample) && !res.includes(sample)) res.push(sample);
    } else {
      for (let i = s; i < data.length; i++) {
        stack.push(i);
        com(L + 1, i + 1, numb);
        stack.pop();
      }
    }
  }

  for (let i = 1; i <= data.length - 2; i++) {
    res = [];
    com(0, 0, i);
    if (res.length) return res.length;
  }
}

console.log(solution('))()()')); // 1
console.log(solution('()(()()')); // 2
