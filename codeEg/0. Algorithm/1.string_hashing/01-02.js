const solution = (s1, s2) => {
  const arr = [0, 0];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) arr[s1[i]] += 1;
  }

  return Math.max(...arr);
};

const inputData = [
  ['11000111', '11100110'],
  ['11000111', '11111110']
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
