function solution(s1, s2) {
  const hash = {};

  for (const str of s1) hash[str] = hash[str] + 1 || 1;

  for (const str of s2) {
    if (hash[str]) hash[str] -= 1;
    else return 'NO';
  }
  return 'YES';
}

const inputData = [
  ['AbaAeCe', 'baeeACA'],
  ['abaCC', 'Caaab']
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
