const solution = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if ('+-*/'.includes(s[i])) {
      const [other, value] = [+stack.pop(), +stack.pop()];

      stack.push(
        s[i] === '+'
          ? value + other
          : s[i] === '-'
          ? value - other
          : s[i] === '*'
          ? value * other
          : value / other
      );
    } else {
      stack.push(s[i]);
    }
  }

  return stack[0];
};

const inputData = ['352+*9-', '232*+63-4*+'];

for (const data of inputData) {
  console.log(solution(data));
}

// 이진트리 [null, 1, 2, 3, 4, 5, 6 ,7]
// 전위 : 부 -> L -> R ; 1 2 4 5 3 6 7
// 중위 : L -> 부 -> R ; 4 2 5 1 6 3 7
// 후위 : L -> R -> 부 ; 4 5 2 6 7 3 1
