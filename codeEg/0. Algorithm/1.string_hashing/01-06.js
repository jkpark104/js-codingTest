const solution = s => {
  const hash = {};

  for (const str of s) {
    hash[str] = hash[str] + 1 || 0;
  }

  return Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0];
};

const inputData = ['BACBACCACCBDEDE'];

for (const data of inputData) {
  console.log(solution(data));
}
