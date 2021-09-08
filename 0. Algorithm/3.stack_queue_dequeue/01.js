function solution(s) {
  const stack = [];

  for (const str of s) {
    if (str === '(') {
      stack.push(1);
    } else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  return stack.length ? 'NO' : 'YES';
}

const inputData = ['(()(()))(()', '()()', '(())()', ')()(', '(()('];

for (const data of inputData) {
  console.log(solution(data));
}
