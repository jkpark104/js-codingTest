const input = '2 3 1 2 2'

const data = input.split(' ').map(x => parseInt(x))
data.sort((a,b) => (a-b))

let cnt = 0
let ans = 0

for (let i of data) {
  cnt += 1
  
  if (cnt == i) {
    ans += 1
    cnt = 0
  }
}

console.log(ans)