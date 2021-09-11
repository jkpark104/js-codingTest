function solution(n) {
  let number = n;
  let count = 1;
  let ans = 0;

  number -= count;

  while (number > 0) {
    count += 1;
    if (number % count === 0) ans += 1;
    number -= count;
  }

  return ans;
}

const inputData = [
  15,
  45678,
  98765,
  7,
];

for (const data of inputData) {
  console.log(solution(data));
}