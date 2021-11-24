function solution(s) {
  const arr = [0, 0];

  const data = s.split('').map(el => +el);

  let prev = -1;
  for (const num of data) {
    if (prev !== num) {
      arr[num] += 1;
      prev = num;
    }
  }
  return Math.min(...arr);
}

const inputData = ['100001111', '10010111100', '0110010'];

for (const data of inputData) {
  console.log(solution(data));
}
