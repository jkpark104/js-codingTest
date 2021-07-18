const input = `
1 3 3 2 2 1 4 1 0 6 4 7
`.trim()

const [n, m] = [3, 4]

const data = input.split(' ').map(Number)
const goldMine = []

for (let i=0; i< n*m; i+=m) {
  goldMine.push(data.slice(i,i+m))
}

const dp = new Array(n+2).fill().map(() => new Array(m+2).fill(0))
let ans = 0
for (let i=1; i<m+1; i++) {
  for (let j=1; j<n+1; j++) {
    dp[j][i] = goldMine[j-1][i-1] + Math.max(dp[j-1][i-1], dp[j][i-1], dp[j+1][i-1])
    ans = Math.max(ans, dp[j][i])
  }
}

console.log(ans)