const solution = nums =>
  nums
    .map((row, i) => ({ i, cnt: row.filter(el => el === 1).length }))
    .sort((a, b) => a.cnt - b.cnt || a.i - b.i)
    .map(el => el.i);

const input_data = [
  [
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
  ]
];

for (let data of input_data) {
  console.log(solution(data));
}
