const solution = (number, k) => {
  const stack = [];

  const n = number.length;
  for (let i = 0; i < n; i++) {
    while (stack.length && k && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k -= 1;
    }

    stack.push(number[i]);
  }

  return stack.slice(0, n - k).join('');
};
