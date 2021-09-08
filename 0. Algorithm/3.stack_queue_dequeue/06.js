function solution(need, plan) {
  const q = [];
  for (const n of need) q.push(n);

  for (const p of plan) {
    if (q.includes(p)) {
      if (p === q[0]) {
        q.shift();
      } else return 'NO';
    }
  }
  return !q.length ? 'YES' : 'NO';
}

const inputData = [
  ['CBA', 'CBDAGE'],
  ['CBA', 'CBDBAGE'],
  ['CBA', 'CBDBAGE'],
  ['CBA', 'CGEADB']
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
