const input_data = `
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5
`.trim().split('\n')

const n = 5

const data = input_data.map(
  i => i.split(' ').map(Number)
)

let ans = 0
for (let i=1; i<n; i++) {
  for (let j=0; j<i+1; j++) {
    if (j == 0) {
      data[i][0] += data[i-1][0]
    } else if (j==i) {
      data[i][i] += data[i-1][i-1]
    } else {
      data[i][j] += Math.max(data[i-1][j-1], data[i-1][j])
    }
    ans = Math.max(ans, data[i][j])
  }
}

console.log(ans)