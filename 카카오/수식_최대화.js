const calc = (symbol, a, b) => {
  if (symbol === '+') return a + b;
  if (symbol === '-') return a - b;
  if (symbol === '*') return a * b;
};

const isCorrect = (array, exp) => {
  exp = exp.match(/[0-9]+|[*\-+]/g);

  for (const sym of array) {
    const stack = [];
    for (let i = 0; i < exp.length; i++) {
      if (stack.length && stack[stack.length - 1] === sym) {
        stack.pop();
        const a = +stack.pop();
        const b = +exp[i];
        stack.push(calc(sym, a, b));
      } else {
        stack.push(exp[i]);
      }
    }
    exp = [...stack];
  }
  return Math.abs(exp[0]);
};

function solution(expression) {
  const symbol = {};
  for (const str of expression) {
    if ('-*+'.includes(str)) symbol[str] = (symbol[str] || 0) + 1;
  }
  const sample = Object.keys(symbol);
  const n = sample.length;
  const chk = new Array(n).fill(0);

  const tmp = [];
  let answer = 0;

  function permutation(L) {
    if (L === n) {
      answer = Math.max(isCorrect([...tmp], expression), answer);
    } else {
      for (let i = 0; i < n; i++) {
        if (!chk[i]) {
          chk[i] = 1;
          tmp.push(sample[i]);
          permutation(L + 1);
          tmp.pop();
          chk[i] = 0;
        }
      }
    }
  }
  permutation(0);

  return answer;
}

console.log(solution('100-200*300-500+20'));
console.log(solution('50*6-3*2'));
