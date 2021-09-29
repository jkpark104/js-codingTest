function solution(s) {
  let stack = [];

  let ans = '';
  for (const str of s) {
    if (str === ')') {
      let chunk = [];
      while (stack[stack.length - 1] !== '(') {
        chunk = [stack.pop(), ...chunk];
      }
      stack.pop();
      let rep = 1;
      if (typeof stack[stack.length - 1] === 'number') rep = stack.pop();

      if (stack.length === 0) ans += chunk.join('').repeat(rep);
      else stack = [...stack, ...chunk.join('').repeat(rep).split('')];
    } else if (!Number.isNaN(+str)) stack.push(+str);
    else stack.push(str);
  }
  return ans + stack.join('');
}

console.log(solution('2(ab)k3(bc)')); // ababkbcbcbc
console.log(solution('3(a2(b))ef')); // abbabbabbef
console.log(solution('2(a(b))')); // abab
