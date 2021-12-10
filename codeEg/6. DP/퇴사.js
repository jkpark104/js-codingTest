const input_data = `
3 10
5 20
1 10
1 20
2 15
4 40
2 200
`.trim().split('\n')

const n = 7
const days = []
const dp = []

for (let data of input_data) {
  const [i, j] = data.split(' ').map(Number)
  days.push(i)
  dp.push(j)
}
dp.push(0)

for (let i = n - 1; i > -1; i--) {
  if (days[i] + i > n) {
    dp[i] = dp[i + 1]
  } else {
    dp[i] = Math.max(dp[i + 1], dp[i] + dp[days[i] + i])
  }
}

console.log(dp[0])