const solution = (need, plan) => {
  const needs = [...need];
  const plans = [...plan];

  for (const p of plans) {
    if (needs[0] === p) needs.shift();
    else if (needs.includes(p)) return 'NO';
  }

  return needs.length ? 'NO' : 'YES';
};

const inputData = [
  ['CBA', 'CBDAGE'],
  ['CBA', 'CBDBAGE'],
  ['CBA', 'CBDBAGE'],
  ['CBA', 'CGEADB'],
  ['CBA', 'CABEEBA']
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
