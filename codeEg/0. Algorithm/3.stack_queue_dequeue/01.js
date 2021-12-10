const solution = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  return stack.length ? 'NO' : 'YES';
};

const inputData = ['(()(()))(()', '()()', '(())()', ')()(', '(()('];

for (const data of inputData) {
  console.log(solution(data));
}
