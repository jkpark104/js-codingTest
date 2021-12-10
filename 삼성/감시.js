const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
input = input
  .map(el => el.replace(/\r/, ''), '')
  .map(el => el.split(' ').map(Number));

const [n, m] = input.shift();

const UP = 1;
const R = 2;
const L = 4;
const DN = 8;

const direction = [
  [],
  [UP, R, L, DN],
  [UP + DN, L + R],
  [UP + R, R + DN, DN + L, L + UP],
  [UP + R + DN, R + DN + L, DN + L + UP, L + UP + R],
  [UP + R + L + DN]
];

const camera = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] > 0 && input[i][j] < 6) {
      camera.push([i, j]);
    }
  }
}

function spread(dir, number, [x, y]) {
  const dx = [-1, 0, 0, 1];
  const dy = [0, 1, -1, 0];

  for (let i = 0; i < 4; i++) {
    if (((1 << i) & dir) === 1 << i) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      while (nx >= 0 && nx < n && ny >= 0 && ny < m && input[nx][ny] !== 6) {
        input[nx][ny] += number;
        [nx, ny] = [nx + dx[i], ny + dy[i]];
      }
    }
  }
}

const res = [];

const _input = input.map(el => el.slice());

function solution(L) {
  if (L === camera.length) {
    res.push(
      input.reduce((acc, cur) => {
        acc += cur.filter(el => el === 0).length;
        return acc;
      }, 0)
    );
  } else {
    const [x, y] = camera[L];
    const z = _input[x][y];
    for (const dir of direction[z]) {
      spread(dir, 9, [x, y]);
      solution(L + 1);
      spread(dir, -9, [x, y]);
    }
  }
}

solution(0);
console.log(Math.min(...res));
