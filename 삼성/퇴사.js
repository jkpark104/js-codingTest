const fs = require('fs');

let inputValue = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let inputValue = fs.readFileSync('./test.txt').toString().trim().split('\n');
inputValue = inputValue
  .map(el => el.replace(/\r/, ''), '')
  .map(el => el.split(' ').map(Number));

const n = inputValue.shift()[0];

let days = [];
let income = [];

for (const [day, inc] of inputValue) {
  days = [...days, day];
  income = [...income, inc];
}

income.push(0);

const dp = income;

for (let i = income.length - 2; i > -1; i--) {
  if (i + days[i] > n) {
    dp[i] = dp[i + 1];
  } else {
    dp[i] = Math.max(dp[i + 1], dp[i] + dp[i + days[i]]);
  }
}

console.log(dp[0]);
