const input = require('fs')
  // .readFileSync('./test.txt')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ');

const s = Number(input[0]);
const e = Number(input[1]);

function solution(s, e) {
  const INF = 500001;
  const chk = Array.from({ length: INF }, () => new Array(2).fill(0));

  let q = [[s, 0]];
  chk[s][0] = 1;
  let qCopy = [];
  let ePosition = e;
  let time = 0;
  while (ePosition < INF) {
    ePosition += time;
    qCopy = [];
    while (q.length) {
      const [now, option] = q.shift();
      if (ePosition < INF && chk[ePosition][time % 2]) return time;
      const nextOption = (option + 1) % 2;
      for (const next of [now - 1, now + 1, now * 2]) {
        if (next >= 0 && next < INF && !chk[next][nextOption]) {
          chk[next][nextOption] = 1;
          qCopy.push([next, nextOption]);
        }
      }
    }
    if (qCopy.length) q = qCopy;
    else return -1;
    time += 1;
  }
  return -1;
}

console.log(solution(s, e));
// console.log(solution(5, 6)); // 2
// console.log(solution(10, 3)); // 3
// console.log(solution(1, 11)); // 6
// console.log(solution(11, 1)); // 4
// console.log(solution(70, 1)); // 11
// // console.log(solution(100, 1)); // 11
// console.log(solution(2, 11)); // 5
