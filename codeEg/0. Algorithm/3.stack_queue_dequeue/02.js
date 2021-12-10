const solution = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};

const inputData = ['(A(BC)D)EF(G(H)(IJ)K)LM(N)', '(A(BC))DE(AB)'];

for (const data of inputData) {
  console.log(solution(data));
}
