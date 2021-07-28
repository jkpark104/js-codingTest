const [n, c] = [5, 3]

const input_data = `
1
2
8
4
9
`.trim().split('\n')

const home = input_data.map(Number).sort((a,b) => a-b)

let start = 1
let end = home[home.length-1] - home[0]
let ans = 0
while (start <= end) {
  const mid = parseInt((start + end) /2)
  let val = home[0]
  let cnt = 1
  for (let i = 1; i < n; i++) {
    if (home[i] - val >= mid) {
      cnt += 1
      val = home[i]
    }
  }
  if (cnt >= c) {
    start = mid + 1
    ans = mid
  } else {
    end = mid -1
  }
}

console.log(ans)