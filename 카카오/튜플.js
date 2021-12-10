function solution(s) {
  let answer = [];

  let res = [];
  for (const str of s.match(/[0-9,]{1,}/g)) {
    const sample = str.split(',');
    if (sample[0]) res = [...res, sample.map(Number)];
  }
  res.sort((a, b) => a.length - b.length);

  answer.push(res[0][0]);
  for (let i = 0; i < res.length - 1; i++) {
    answer = [...answer, ...res[i + 1].filter(el => res[i].indexOf(el) === -1)];
  }
  return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
