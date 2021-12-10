const solution = s => {
  const stack = [];

  for (const str of s) {
    if (stack[stack.length - 1] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.join('');
};

const inputData = ['acbbcaa', 'bacccaba'];

for (const data of inputData) {
  console.log(solution(data));
}
