const input = `
0 1 0 1 1
1 0 1 1 0
0 1 0 0 0
1 1 0 0 0
1 0 0 0 0
`.trim().split('\n')

const [v, k] = [5, 4]
parent = new Array(v+1).fill().map((x,idx) => idx)

for (let i=0; i<v; i++) {
  tmp = input[i].split(' ').map(Number)
  for (let j=0; j<v; j++) {
    if (tmp[j]) {
      union_parent(i+1, j+1)
    }
  }
}

const town = [2, 3, 4, 3]
let ans = 'YES'
for (let i=0; i<k-1; i++) {
  const a = town[i]
  const b = town[i+1]
  if (find_parent(a) !== find_parent(b)) ans = 'NO'
}

console.log(ans)


function find_parent(x) {
  if (x != parent[x]) {
    parent[x] = find_parent(parent[x])
  }
  return parent[x]
}

function union_parent(a, b) {
  a = find_parent(a)
  b = find_parent(b)
  if (a > b) {
    parent[a] = b
  } else {
    parent[b] = a
  }
}