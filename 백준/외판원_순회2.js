const fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
input = input
  .map(el => el.replace(/\r/, ''), '')
  .map(el => el.split(' ').map(Number));

const n = input.shift()[0];

const INF = Number.MAX_SAFE_INTEGER;

const chk = new Array(n).fill(0);

const tmp = [];

function getValue(arr) {
  let res = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    res += input[arr[i]][arr[i + 1]] || INF;
  }
  return res;
}

let ans = Number.MAX_SAFE_INTEGER;
function permutation(L) {
  if (L === n - 1) {
    ans = Math.min(ans, getValue([0, ...tmp, 0]));
  } else {
    for (let i = 1; i < n; i++) {
      if (!chk[i]) {
        tmp.push(i);
        chk[i] = 1;
        permutation(L + 1);
        tmp.pop();
        chk[i] = 0;
      }
    }
  }
}

permutation(0);
console.log(ans);
