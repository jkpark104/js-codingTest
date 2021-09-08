function solution(n, k) {
  const q = new Array(n).fill().map((el, i) => i + 1);
  let currentNumber = 0;
  while (q.length !== 1) {
    currentNumber += 1;
    if (currentNumber === k) {
      q.shift();
      currentNumber = 0;
    } else {
      q.push(q.shift());
    }
  }
  return q[0];
}

const inputData = [[8, 3]];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
