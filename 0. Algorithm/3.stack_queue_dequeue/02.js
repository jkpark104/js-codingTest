function solution(s) {
  const stack = [];
  for (const str of s) {
    if (str === '(') {
      stack.push(1);
    } else if (str === ')') {
      while (stack.pop() !== 1);
    } else {
      stack.push(str);
    }
  }
  return stack.join('');
}

const inputData = ['(A(BC)D)EF(G(H)(IJ)K)LM(N)', '(A(BC))DE(AB)'];

for (const data of inputData) {
  console.log(solution(data));
}
