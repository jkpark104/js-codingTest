const solution = s => {
  for (let i = 0; i < s.length; i++) {
    const sample = [...s];
    sample.splice(i, 1);

    if (sample.join('') === sample.reverse().join('')) return 'YES';
  }

  return 'NO';
};

const input_data = ['abcbdcba', 'abcabbakcba', 'abcacbakcba', 'bab'];

for (let data of input_data) {
  console.log(solution(data));
}
