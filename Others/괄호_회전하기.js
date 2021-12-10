function isCorrect(s) {
  const pair = {
    ']': '[',
    ')': '(',
    '}': '{'
  };

  let stack = [];

  for (const str of s) {
    if ('])}'.includes(str)) {
      if (stack.indexOf(pair[str]) === -1) return false;
      while (stack.length && stack[stack.length - 1] !== pair[str]) {
        stack.pop();
      }
      stack.pop();
    } else stack = [...stack, str];
  }
  return stack.length === 0;
}

function solution(s) {
  let ans = 0;

  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (isCorrect(s)) ans += 1;
    s = [...s.slice(1), s[0]];
  }

  return ans;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
console.log(solution('({[}])'));
