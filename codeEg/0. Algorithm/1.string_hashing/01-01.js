const solution = s => {
  const arr = [0, 0];

  let prev = null;

  for (let i = 0; i < s.length; i++) {
    if (prev !== s[i]) {
      arr[s[i]] += 1;
      prev = s[i];
    }
  }

  return Math.min(...arr);
};

const inputData = ['100001111', '10010111100', '0110010'];

for (const data of inputData) {
  console.log(solution(data));
}
